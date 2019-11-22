import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchStars } from '../store/thunks'
import Project from './Project'

const Section = styled.article`
  max-width: 1000px;
  margin: 2em;
`

export default function Projects() {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)
  useEffect(() => dispatch(fetchStars()), [])
  return (
    <Section>
      {projects.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </Section>
  )
}
