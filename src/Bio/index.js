import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import { setPageProgression } from '../store/actions'
import Projects from './Projects'
import About from './About'

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
const Hero = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: middle;
  color: white;
`

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
`

export default function Bio() {
  const dispatch = useDispatch()
  const handleScroll = event => {
    const { target } = event
    const { clientHeight, scrollTop, scrollHeight } = target
    const progression = scrollTop / (scrollHeight - clientHeight)
    dispatch(setPageProgression(progression))
  }

  return (
    <Main onScroll={handleScroll}>
      <FontFace />
      <Hero>
        <Title>Florian Mounier</Title>
      </Hero>
      <Projects />
      <About />
    </Main>
  )
}
