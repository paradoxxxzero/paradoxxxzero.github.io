import {
  PerspectiveCamera,
  WebGLRenderer,
  Scene,
  BackSide,
  BoxBufferGeometry,
  Geometry,
  Points,
  PointsMaterial,
  Mesh,
  ShaderMaterial,
  Vector3,
  TextureLoader,
  AdditiveBlending,
  Spherical,
  Color,
  VertexColors,
} from 'three'
import { useSelector } from 'react-redux'
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'

import Star from './star.png'
import vertexShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const STARS = 2000

export default function Sky() {
  const threeRef = useRef()
  const canvasRef = useRef()
  const progression = useSelector(state => state.progression)

  useLayoutEffect(() => {
    const { current: canvas } = canvasRef
    const camera = new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    )
    camera.position.set(0, 0, 0)
    camera.lookAt(new Vector3(0, 1, -2))

    const renderer = new WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const uniforms = {
      luminance: { value: 1 },
      turbidity: { value: 10 },
      rayleigh: { value: 2 },
      mieCoefficient: { value: 0.005 },
      mieDirectionalG: { value: 0.995 },
      sunPosition: { value: new Vector3() },
      up: { value: new Vector3(0, 1, 0) },
    }
    const skyMaterial = new ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms,
      side: BackSide,
    })

    const sky = new Mesh(new BoxBufferGeometry(1, 1, 1), skyMaterial)
    sky.scale.setScalar(9000)
    const scene = new Scene()
    scene.add(sky)

    const starsSpherical = new Spherical()
    const starsGeometry = new Geometry()
    starsGeometry.vertices = new Array(STARS).fill().map(() => {
      starsSpherical.radius = 250 + Math.random() * 750
      starsSpherical.theta = -Math.PI / 2 + Math.random() * Math.PI
      starsSpherical.phi = Math.random() * 2 * Math.PI
      return new Vector3().setFromSpherical(starsSpherical)
    })
    const colors = STARS / 10
    const colorStep = colors / 3
    const luminance = v => (v + 2) / 3
    starsGeometry.colors = new Array(STARS).fill().map(() => {
      // Computing a random color in the star spectrum:
      // Red -> (orange ->) yellow -> white -> blue
      const c = Math.random() * (colors + 1)

      // red: 1 -> 1 -> 1 -> 0
      const r = c > 2 * colorStep ? 1 - (c - 2 * colorStep) / colorStep : 1
      // green: 0 -> 1 -> 1 -> 0
      const g = c < colorStep ? c / colorStep : r
      // blue: 0 -> 0 -> 1 -> 1
      const b =
        c < colorStep ? 0 : c > 2 * colorStep ? 1 : (c - colorStep) / colorStep
      // And finally, raises the luminance
      return new Color(...[r, g, b].map(luminance))
    })

    const starsMaterial = new PointsMaterial({
      size: 8,
      map: new TextureLoader().load(Star, () => {
        renderer.render(scene, camera)
      }),
      vertexColors: VertexColors,
      blending: AdditiveBlending,
      depthTest: false,
      transparent: true,
      opacity: 1,
    })
    const stars = new Points(starsGeometry, starsMaterial)
    stars.rotation.reorder('ZXY')
    scene.add(stars)

    const sunSpherical = new Spherical()

    window.sky = threeRef.current = {
      scene,
      camera,
      renderer,
      sky,
      stars,
      sunSpherical,
    }

    renderer.render(scene, camera)

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)
    }
    window.addEventListener('resize', onWindowResize, false)
    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [canvasRef])

  useEffect(() => {
    const { current: three } = threeRef
    const { renderer, scene, camera, sky, stars, sunSpherical } = three
    const threshold = 0.8
    const sunProgression = Math.min(progression, threshold) / threshold
    const travellingProgression =
      (Math.max(threshold, progression) - threshold) / (1 - threshold)
    const starsProgression =
      (Math.max(threshold / 2, progression) - threshold / 2) /
      (1 - threshold / 2)

    sunSpherical.theta = (Math.PI / 2 - Math.PI * sunProgression) / 3
    sunSpherical.phi =
      -Math.PI / 2 +
      (Math.PI / 4) * (1 - Math.pow((sunProgression + 0.3) * 2 - 1, 2))

    const {
      uniforms: { sunPosition },
    } = sky.material
    sunPosition.value.setFromSpherical(sunSpherical)

    // stars.material.opacity = Math.pow(Math.cos(sunProgression * Math.PI), 50)
    stars.material.opacity = starsProgression
    stars.rotation.set(-Math.PI / 4, progression, Math.PI / 8)

    // camera.position.y = -500 * travellingProgression * travellingProgression
    camera.position.z = -1000 * travellingProgression
    // camera.lookAt(
    //   new Vector3(
    //     0,
    //     -500 *
    //       (travellingProgression + 0.0001) *
    //       (travellingProgression + 0.0001) +
    //       1,
    //     -1000 * (travellingProgression + 0.0001) - 2
    //   )
    // )
    renderer.render(scene, camera)
  }, [progression])

  return (
    <aside>
      <Canvas ref={canvasRef} tabIndex="1" />
    </aside>
  )
}
