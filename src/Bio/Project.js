import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { prettyUrl } from '../utils'
import ExternalLink from './ExternalLink'
import Stars from './Stars'

const Article = styled.article`
  background: rgba(0, 0, 0, 0.2);
  padding: 1em;
  margin: 1em;
  font-size: 1.5em;
  text-align: left;
  &:nth-child(2n + 1) {
    text-align: right;
  }
`
const Content = styled.div`
  margin: 1em;
`
const Name = styled.h2`
  color: rgba(255, 255, 255, 0.9);
`

const ProjectLink = styled(ExternalLink)`
  color: forestgreen;
`

export default function Project({
  id,
  name,
  url,
  demoUrl,
  description,
  languages,
  libraries,
  major,
}) {
  const allStars = useSelector(state => state.stars)
  const stars = allStars[id]

  return (
    <Article>
      <Name>{name}</Name>
      <Content>{description}</Content>
      <ProjectLink url={demoUrl || url}>{prettyUrl(url)}</ProjectLink>
      {stars && <Stars url={url} stars={stars} />}
    </Article>
  )
}
