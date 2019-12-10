import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { prettyUrl } from '../utils'
import ExternalLink from './utils/ExternalLink'
import Stars, { Star } from './Stars'
import defaultPreview from '../static/previews/default.png'

const Article = styled.article`
  flex: 2;
  margin: 1em;
`

const Name = styled.h2`
  display: flex;
  justify-content: space-between;
  flex: 1;
  color: ${props => props.theme.fg.normal};
  margin: 0.5em 0;
`
const Pills = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`
const Pill = styled.li`
  background: ${props => props.theme.bg.normal};
  padding: 0.3em;
  margin: 0.2em;
  color: ${props => props.theme.fg.mute};
`
const Language = styled(Pill)`
  font-size: 0.75em;
`
const Library = styled(Pill)`
  font-size: 0.66em;
`
const Content = styled.div`
  margin: 1em 0;
  color: ${props => props.theme.fg.mute};
`

const Aside = styled.aside`
  flex: 1;
  display: flex;
`
const WrappingExternalLink = styled(ExternalLink)`
  flex: 1;
  display: flex;
`

const Preview = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 256px;
`
const ProjectItem = styled.li`
  background: ${props => props.theme.bg.normal};
  margin: 1em;
  font-size: ${props => (props.major ? '1.5em' : '1.15em')};
  text-align: left;
  flex-direction: row-reverse;
  display: flex;
  flex-wrap: wrap-reverse;

  &:nth-child(2n) {
    flex-direction: row;
    text-align: right;
    ${Name} {
      flex-direction: row-reverse;
    }
    ${Star} {
      flex-direction: row-reverse;
    }
    ${Pills} {
      flex-direction: row-reverse;
    }
  }
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
  preview,
}) {
  const allStars = useSelector(state => state.stars)
  const stars = allStars[id]

  return (
    <ProjectItem major={major}>
      <Article>
        <Name>
          {name}
          <Stars url={url} stars={stars} />
        </Name>
        <Pills>
          {languages.map(language => (
            <Language key={language}>{language}</Language>
          ))}
          {libraries.map(lib => (
            <Library key={lib}>{lib}</Library>
          ))}
        </Pills>
        <Content>{description}</Content>
        <ExternalLink url={demoUrl || url}>{prettyUrl(url)}</ExternalLink>
      </Article>
      <Aside>
        <WrappingExternalLink url={demoUrl || url}>
          <Preview
            src={preview || defaultPreview}
            alt={`Image preview of ${name}`}
          />
        </WrappingExternalLink>
      </Aside>
    </ProjectItem>
  )
}
