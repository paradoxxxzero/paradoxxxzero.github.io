import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import { setPageProgression } from '../store/actions'
import Projects from './Projects'
import Bio from './Bio'
import Home from './Home'
import Extra from './Extra'

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
`

export default function Site() {
  const dispatch = useDispatch()
  const handleScroll = event => {
    const { target } = event
    const { clientHeight, scrollTop, scrollHeight } = target
    const progression = scrollTop / (scrollHeight - clientHeight)
    dispatch(setPageProgression(progression))
  }

  return (
    <>
      <FontFace />
      <Main onScroll={handleScroll}>
        <Home />
        <Projects />
        <Bio />
        <Extra />
      </Main>
    </>
  )
}
