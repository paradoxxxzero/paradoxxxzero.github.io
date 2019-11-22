import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchStars } from '../store/thunks'
import Project from './Project'

const ProjectList = styled.ul`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  list-style: none;
`

export default function Projects() {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)
  useEffect(() => dispatch(fetchStars()), [])
  return (
    <ProjectList>
      {projects.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </ProjectList>
  )
}
