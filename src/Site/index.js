import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import { setPageProgression, setPageSize } from '../store/actions'
import Projects from './Projects'
import Bio from './Bio'
import Home from './Home'
import Extra from './Extra'
import Menu from './Menu'
import Contact from './Contact'
import Meta from './Meta'

const FontFace = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Asap&display=swap');
    font-family: 'Asap', sans-serif;
  }
`

const Main = styled.main`
  position: relative;
  height: 100%;
`

export default function Site() {
  const dispatch = useDispatch()

  const onScrollRequested = useCallback(scroll => {
    document.scrollingElement.scrollTo(0, scroll)
  }, [])

  useEffect(() => {
    const onWindowResize = () => {
      dispatch(
        setPageSize(
          window.innerWidth,
          window.innerHeight,
          window.devicePixelRatio
        )
      )
    }
    const onPageScroll = event => {
      const { scrollingElement } = event.target
      const {
        clientHeight,
        scrollTop: absolute,
        scrollHeight: total,
      } = scrollingElement
      const relative = absolute / (total - clientHeight)
      dispatch(setPageProgression(relative, absolute, total))
    }
    window.addEventListener('resize', onWindowResize, false)
    window.addEventListener('scroll', onPageScroll, false)
    window.addEventListener('load', onPageScroll, false)
    return () => {
      window.removeEventListener('resize', onWindowResize)
      window.removeEventListener('scroll', onPageScroll)
      window.removeEventListener('load', onPageScroll)
    }
  }, [dispatch])

  return (
    <>
      <FontFace />
      <Main>
        <Menu onScrollRequested={onScrollRequested} />
        <Home />
        <Projects />
        <Bio />
        <Contact />
        <Meta />
        <Extra />
      </Main>
    </>
  )
}