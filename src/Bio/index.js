import { useDispatch } from 'react-redux'

import React from 'react'
import styled from 'styled-components'

import { setPageProgression } from '../store/actions'
import Project from './Project'

const Main = styled.main`
  position: relative;
  height: 100%;
  overflow: auto;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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
      <header>
        <Title>Florian Mounier</Title>
      </header>
      <article>
        <h1>Projects</h1>
        <Project name="Formol" url="https://kozea.github.io/formol/">
          A full featured object edition form framework for React.
        </Project>
        <Project name="Pygal" url="http://www.pygal.org/">
          A python charting library with a clean and simple API.
        </Project>
        {new Array(50).fill().map((_, v) => (
          <Project key={v} name={v} url={`http://site-${v}.exemple.com/`}>
            Lorem {v}
          </Project>
        ))}
      </article>
    </Main>
  )
}
