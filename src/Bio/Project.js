import React from 'react'
import styled from 'styled-components'

import { prettyUrl } from '../utils'
import ExternalLink from './ExternalLink'

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

export default function Project({ name, url, children }) {
  // if url like github fetch star count
  return (
    <Article>
      <Name>{name}</Name>
      <Content>{children}</Content>
      <ProjectLink url={url}>{prettyUrl(url)}</ProjectLink>
    </Article>
  )
}
