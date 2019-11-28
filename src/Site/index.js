import React, { useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import { setPageProgression } from '../store/actions'
import Projects from './Projects'
import Bio from './Bio'
import Home from './Home'
import Extra from './Extra'
import Menu from './Menu'

const FontFace = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Asap&display=swap');
    font-family: 'Asap', sans-serif;
  }
`

const Main = styled.main`
  position: relative;
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
`

export default function Site() {
  const mainRef = useRef()
  const dispatch = useDispatch()
  const handleScroll = event => {
    const { target } = event
    const { clientHeight, scrollTop, scrollHeight } = target
    const progression = scrollTop / (scrollHeight - clientHeight)
    dispatch(setPageProgression(progression))
  }

  const onScrollRequested = useCallback(
    scroll => {
      mainRef.current.scrollTo(0, scroll)
    },
    [mainRef]
  )

  return (
    <>
      <FontFace />
      <Main onScroll={handleScroll} ref={mainRef}>
        <Home />
        <Projects />
        <Bio />
        <Extra />
      </Main>
      <Menu onScrollRequested={onScrollRequested} />
    </>
  )
}
