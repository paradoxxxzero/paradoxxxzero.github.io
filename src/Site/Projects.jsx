import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchStars } from '../store/thunks'
import Project from './Project'
import AnchoredSection from './utils/AnchoredSection'
import Title from './utils/Title'
import { useEffect } from 'react'

const TYPES = {
  projects: 'Projects',
  experiments: 'Experiments',
}

const ProjectList = styled.ul`
  max-width: 1000px;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`

export default function Projects({ type }) {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)
    .filter(project => project.type === type)
    .sort((a, b) => b.major - a.major)
  useEffect(() => {
    dispatch(fetchStars())
  }, [dispatch])
  return (
    <AnchoredSection anchor={type}>
      <Title>{TYPES[type]}</Title>
      <ProjectList>
        {projects
          .filter(({ hidden }) => !hidden)
          .map(project => (
            <Project key={project.id} {...project} />
          ))}
      </ProjectList>
    </AnchoredSection>
  )
}
