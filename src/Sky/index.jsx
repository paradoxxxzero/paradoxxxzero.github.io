import { HyperMesh, HyperRenderer, shapes } from 'four-js'
import { useEffect, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  BackSide,
  BufferGeometry,
  CatmullRomCurve3,
  DoubleSide,
  Float32BufferAttribute,
  LineBasicMaterial,
  MeshLambertMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  ShaderMaterial,
  Spherical,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
} from 'three'
import { Water } from 'three/examples/jsm/objects/Water2'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { linearClamp } from '../utils'
import fragmentShader from './fragmentShader.glsl?raw'
import Star from './star.png'
import vertexShader from './vertexShader.glsl?raw'
import Water0 from './Water0.jpg'
import Water1 from './Water1.jpg'

const STARS = 5000

const cameraCurve = new CatmullRomCurve3(
  [
    new Vector3(0, 1, 2.5),
    new Vector3(0, 2, 0),
    // new Vector3(0, 0.5, -100),
    // new Vector3(0, 4, -200),
    new Vector3(-200, 400, -400),
    // new Vector3(-360, 720, -720),
    new Vector3(-350, 700, -700),
  ],
  false,
  'chordal'
)

export default function Sky() {
  const { relative: progression, total: totalHeight } = useSelector(
    state => state.progression
  )
  const threeRef = useRef()
  const {
    width: winWidth,
    height: winHeight,
    devicePixelRatio,
  } = useSelector(state => state.page)

  const anchors = useSelector(state => state.anchors)

  const boundaries = useMemo(
    () => ({
      day: {
        start: 0,
        end: (1.075 * anchors.bio) / (totalHeight - winHeight),
      },
      night: {
        start: (1.1 * anchors.bio) / (totalHeight - winHeight),
        end: 0.6,
      },
      stars: {
        start: (anchors.bio - winHeight) / (totalHeight - winHeight),
        end: anchors.contact / (totalHeight - winHeight),
      },
      water: {
        start: anchors.projects / (totalHeight - winHeight),
        end: 0.65,
      },
      travelling: {
        start: anchors.contact / (totalHeight - winHeight),
        end: 0.99,
      },
      tesseract: {
        start: 1 - (2 * winHeight) / (totalHeight - winHeight),
        end: 0.99,
      },
    }),
    [anchors, winHeight, totalHeight]
  )

  useEffect(() => {
    let renderer = null

    try {
      renderer = new WebGLRenderer()
      renderer.setPixelRatio(devicePixelRatio)
      renderer.setSize(winWidth, winHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.toneMapping = ACESFilmicToneMapping
      renderer.toneMappingExposure = 0.25
      renderer.domElement.id = 'canvas'
      document.body.appendChild(renderer.domElement)
    } catch (e) {
      return
    }

    const camera = new PerspectiveCamera(60, winWidth / winHeight, 1, 1000)
    camera.zoom = Math.min(1, winWidth / winHeight)

    const uniforms = {
      turbidity: { value: 20 },
      rayleigh: { value: 3 },
      mieCoefficient: { value: 0.005 },
      mieDirectionalG: { value: 0.995 },
      sunPosition: { value: new Vector3() },
      up: { value: new Vector3(0, 1, 0) },
      shade: { value: 0 },
    }
    const skyMaterial = new ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms,
      side: BackSide,
    })
    const sky = new Mesh(new BoxGeometry(1, 1, 1), skyMaterial)
    sky.scale.setScalar(9000)

    const scene = new Scene()
    scene.add(sky)

    const sunLight = new PointLight(0xffffdd, 1, 0, 2)
    scene.add(sunLight)

    const starsSpherical = new Spherical()
    const starsGeometry = new BufferGeometry()
    const starVertices = new Array(STARS)
      .fill()
      .map(() => {
        starsSpherical.radius = 250 + Math.random() * 750
        starsSpherical.theta = -Math.PI / 2 + Math.random() * Math.PI
        starsSpherical.phi = Math.random() * 2 * Math.PI
        const starVector = new Vector3().setFromSpherical(starsSpherical)
        return [starVector.x, starVector.y, starVector.z]
      })
      .flat()
    starsGeometry.setAttribute(
      'position',
      new Float32BufferAttribute(starVertices, 3)
    )
    const colors = STARS / 10
    const colorStep = colors / 3
    const luminance = v => (v + 2) / 3
    starsGeometry.setAttribute(
      'color',
      new Float32BufferAttribute(
        new Array(STARS)
          .fill()
          .map(() => {
            // Computing a random color in the star spectrum:
            // Red -> (orange ->) yellow -> white -> blue
            const c = Math.random() * (colors + 1)

            // red: 1 -> 1 -> 1 -> 0
            const r =
              c > 2 * colorStep ? 1 - (c - 2 * colorStep) / colorStep : 1
            // green: 0 -> 1 -> 1 -> 0
            const g = c < colorStep ? c / colorStep : r
            // blue: 0 -> 0 -> 1 -> 1
            const b =
              c < colorStep
                ? 0
                : c > 2 * colorStep
                ? 1
                : (c - colorStep) / colorStep
            // And finally, raises the luminance
            return [r, g, b].map(luminance)
          })
          .flat(),
        3
      )
    )

    const starsMaterial = new PointsMaterial({
      size: 8,
      map: new TextureLoader().load(Star, () => {
        renderer.render(scene, camera)
      }),
      vertexColors: true,
      blending: AdditiveBlending,
      transparent: true,
      opacity: 1,
      depthTest: false,
    })
    const stars = new Points(starsGeometry, starsMaterial)
    stars.rotation.reorder('ZXY')
    scene.add(stars)

    const sunSpherical = new Spherical()
    // const groundGeometry = new PlaneGeometry(500, 500)
    // const groundMaterial = new MeshStandardMaterial({
    //   color: 0xffffff,
    //   metalness: 0.5,
    //   roughness: 1,
    // })
    // const ground = new Mesh(groundGeometry, groundMaterial)
    // ground.rotation.x = -Math.PI / 2
    // scene.add(ground)

    const textureLoader = new TextureLoader()
    const waterGeometry = new PlaneGeometry(500, 500)
    const water = new Water(waterGeometry, {
      color: '#ffffff',
      scale: 5,
      flowDirection: new Vector2(0.1, 0.1),
      textureWidth: 1024,
      textureHeight: 1024,
      normalMap0: textureLoader.load(Water0),
      normalMap1: textureLoader.load(Water1),
    })

    water.rotation.x = -Math.PI / 2
    water.visible = false
    scene.add(water)

    const { tesseract } = shapes
    const hyperRenderer = new HyperRenderer(1.5, 5)
    const hyperMesh = new HyperMesh(tesseract, {
      all: {
        colors: [
          '#5c6370',
          '#e06c75',
          '#98c379',
          '#d19a66',
          '#61afef',
          '#c678dd',
          '#56b6c2',
          '#403e41',
        ],
      },
      faces: {
        material: new MeshLambertMaterial({
          opacity: 0.25,
          transparent: true,
          blending: AdditiveBlending,
          side: DoubleSide,
          depthWrite: false,
          vertexColors: true,
        }),
      },
      edges: {
        material: new LineBasicMaterial({
          opacity: 0.1,
          transparent: true,
          blending: AdditiveBlending,
          side: DoubleSide,
          depthWrite: false,
          linewidth: 2,
          vertexColors: true,
        }),
      },
    })

    hyperMesh.position.copy(cameraCurve.getPointAt(1).multiplyScalar(1.005))
    scene.add(hyperMesh)

    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    // const afterimagePass = new AfterimagePass()
    // afterimagePass.uniforms.damp.value = 0.85
    // composer.addPass(afterimagePass)

    window.sky = threeRef.current = {
      scene,
      camera,
      renderer,
      composer,
      sky,
      water,
      stars,
      sunSpherical,
      sunLight,
      hyperRenderer,
      hyperMesh,
    }

    composer.render(scene)
    // We voluntarly remove width height devicePixelRatio since it's handled separately
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const { current: three } = threeRef
    if (!three) {
      return
    }
    const { renderer, composer, scene, camera } = three
    camera.aspect = winWidth / winHeight
    camera.zoom = Math.min(1, winWidth / winHeight)
    camera.updateProjectionMatrix()
    renderer.setSize(winWidth, winHeight)
    composer.setSize(winWidth, winHeight)
    composer.render(scene)
  }, [winWidth, winHeight])

  useEffect(() => {
    const { current: three } = threeRef
    if (!three) {
      return
    }
    const { composer, scene, water, hyperMesh, hyperRenderer } = three
    let raf = null
    const render = () => {
      raf = requestAnimationFrame(render)
      if (hyperMesh.visible) {
        hyperRenderer.rotate({
          xy: 0,
          xz: 0,
          xw: 10,
          yz: 0,
          yw: 10,
          zw: 10,
        })
        hyperMesh.update(hyperRenderer)
      }
      if (hyperMesh.visible || water.visible) {
        composer.render(scene)
      }
    }
    raf = requestAnimationFrame(render)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const { current: three } = threeRef
    if (!three) {
      return
    }
    const {
      composer,
      scene,
      camera,
      sky,
      water,
      stars,
      sunSpherical,
      sunLight,
      hyperMesh,
    } = three
    const sunProgression = linearClamp(progression, boundaries.day)
    sunSpherical.radius = 1000
    sunSpherical.theta = (Math.PI / 2 - Math.PI * sunProgression) / Math.PI
    sunSpherical.phi =
      -Math.PI / 2 +
      (Math.PI / 4) * (1 - Math.pow(1.5 * sunProgression - 0.41, 2))

    const {
      uniforms: { sunPosition },
    } = sky.material
    sunPosition.value.setFromSpherical(sunSpherical)
    sunLight.position.setFromSpherical(sunSpherical)

    const nightProgression = linearClamp(progression, boundaries.night)
    sky.material.uniforms.shade.value = nightProgression

    const waterProgression = linearClamp(progression, boundaries.water)
    water.visible = waterProgression > 0 && waterProgression < 1

    const starsProgression = linearClamp(progression, boundaries.stars)
    stars.material.opacity = Math.pow(starsProgression, 3)
    stars.rotation.set(-Math.PI / 4, progression, Math.PI / 8)

    const travellingProgression = linearClamp(
      progression,
      boundaries.travelling
    )

    camera.position.copy(cameraCurve.getPoint(travellingProgression))
    camera.lookAt(
      cameraCurve
        .getPoint(travellingProgression)
        .add(cameraCurve.getTangent(travellingProgression))
    )
    camera.updateProjectionMatrix()

    const tesseractProgression = linearClamp(progression, boundaries.tesseract)
    hyperMesh.visible = !!tesseractProgression
    hyperMesh.config.faces.splitScale = hyperMesh.config.edges.splitScale =
      tesseractProgression * tesseractProgression * tesseractProgression * 100
    const scaleDownEffect = 50 - 49 * tesseractProgression
    hyperMesh.scale.setScalar(scaleDownEffect)

    composer.render(scene)
  }, [progression, boundaries])

  return null
}
