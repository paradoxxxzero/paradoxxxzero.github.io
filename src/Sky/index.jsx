import { HyperMesh, HyperRenderer, shapes } from 'four-js'
import { useEffect, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  AdditiveBlending,
  AmbientLight,
  BackSide,
  BoxGeometry,
  BufferGeometry,
  CatmullRomCurve3,
  CustomToneMapping,
  DoubleSide,
  Float32BufferAttribute,
  LineBasicMaterial,
  LinearSRGBColorSpace,
  Mesh,
  MeshLambertMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  ShaderChunk,
  ShaderMaterial,
  Spherical,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { Water } from 'three/examples/jsm/objects/Water2'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { linearClamp } from '../utils'
import Water0 from './Water0.jpg'
import Water1 from './Water1.jpg'
import fragmentShader from './fragmentShader.glsl?raw'
import Star from './star.png'
import vertexShader from './vertexShader.glsl?raw'

const STARS = 20000

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

// Uncharted 2 tone mapping
ShaderChunk.tonemapping_pars_fragment =
  ShaderChunk.tonemapping_pars_fragment.replace(
    'vec3 CustomToneMapping( vec3 color ) { return color; }',

    `#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )

      float toneMappingWhitePoint = 1.0;

      vec3 CustomToneMapping( vec3 color ) {
        color *= toneMappingExposure;
        return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );

      }`
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
        end: anchors.meta / (totalHeight - winHeight),
      },
      stars: {
        start: (anchors.bio - winHeight) / (totalHeight - winHeight),
        end: anchors.contact / (totalHeight - winHeight),
      },
      water: {
        start: anchors.projects / (totalHeight - winHeight),
        end: anchors.extra2 / (totalHeight - winHeight),
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
      renderer.toneMapping = CustomToneMapping
      renderer.toneMappingExposure = 0.4
      renderer.outputColorSpace = LinearSRGBColorSpace
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
      mieCoefficient: { value: 0.001 },
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

    const ambientLight = new AmbientLight(0xffffff)
    scene.add(ambientLight)

    const starsSpherical = new Spherical()
    const starsGeometry = new BufferGeometry()
    const starVertices = new Array(STARS)
      .fill()
      .map(() => {
        starsSpherical.radius = 250 + Math.random() * 800
        starsSpherical.theta = Math.random() * 2 * Math.PI
        starsSpherical.phi = Math.acos(Math.random())

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
      depthWrite: false,
    })
    starsMaterial.map.premultiplyAlpha = true
    starsMaterial.map.colorSpace = LinearSRGBColorSpace

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
      renderer,
      scene,
      camera,
      sky,
      water,
      stars,
      sunSpherical,
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

    const nightProgression = linearClamp(progression, boundaries.night)
    sky.material.uniforms.shade.value = nightProgression
    renderer.toneMappingExposure = 0.4 + 0.4 * nightProgression

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
