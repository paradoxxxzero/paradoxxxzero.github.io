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
    camera.rotation.reorder('YXZ')
    camera.rotation.set(0.5, 0, 0)

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

    const starsGeometry = new Geometry()
    starsGeometry.vertices = new Array(1000).fill().map(() => {
      const radius = 250 + Math.random() * 750
      const phi = Math.random() * 2 * Math.PI
      const theta = Math.random() * 2 * Math.PI
      return new Vector3(
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.sin(phi) * Math.cos(theta)
      )
    })

    const starsMaterial = new PointsMaterial({
      size: 10,
      map: new TextureLoader().load(Star),
      blending: AdditiveBlending,
      depthTest: false,
      transparent: true,
      opacity: 1,
    })
    const stars = new Points(starsGeometry, starsMaterial)
    scene.add(stars)
    window.sky = threeRef.current = {
      scene,
      camera,
      renderer,
      sky,
      stars,
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
    const { renderer, scene, camera, sky, stars } = three

    const inclination = 0.51 - 1.02 * progression
    const azimuth = 0.25

    const theta = Math.PI * (inclination - 0.5)
    const phi = 2 * Math.PI * (azimuth - 0.5)

    const { uniforms } = sky.material
    uniforms.sunPosition.value.x = Math.cos(phi)
    uniforms.sunPosition.value.y = Math.sin(phi) * Math.sin(theta)
    uniforms.sunPosition.value.z = Math.sin(phi) * Math.cos(theta)

    camera.rotation.set(0.5, Math.PI * progression, 0)

    stars.material.opacity = Math.pow(Math.cos(progression * Math.PI), 50)
    renderer.render(scene, camera)
  }, [progression])

  return (
    <aside>
      <Canvas ref={canvasRef} tabIndex="1" />
    </aside>
  )
}
