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
    starsGeometry.vertices = new Array(2000).fill().map(() => {
      starsSpherical.radius = 250 + Math.random() * 750
      starsSpherical.theta = -Math.PI / 2 + Math.random() * Math.PI
      starsSpherical.phi = Math.random() * 2 * Math.PI
      return new Vector3().setFromSpherical(starsSpherical)
    })

    const starsMaterial = new PointsMaterial({
      size: 8,
      map: new TextureLoader().load(Star),
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

    sunSpherical.theta = (Math.PI / 2 - Math.PI * progression) / 3
    sunSpherical.phi =
      -Math.PI / 2 +
      (Math.PI / 4) * (1 - Math.pow(progression * 2 - 1, 2)) -
      0.05

    const {
      uniforms: { sunPosition },
    } = sky.material
    sunPosition.value.setFromSpherical(sunSpherical)

    stars.material.opacity = Math.pow(Math.cos(progression * Math.PI), 50)
    stars.rotation.set(-Math.PI / 4, progression, Math.PI / 8)
    renderer.render(scene, camera)
  }, [progression])

  return (
    <aside>
      <Canvas ref={canvasRef} tabIndex="1" />
    </aside>
  )
}
