import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { prettyUrl } from '../utils'
import ExternalLink from './utils/ExternalLink'
import Stars from './Stars'
import defaultPreview from '../static/previews/default.png'

const Section = styled.section`
  flex: 1;
  margin: 1em;
`
const Name = styled.h2`
  color: rgba(255, 255, 255, 0.9);
`
const Languages = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
const Language = styled.li`
  background: rgba(0, 0, 0, 0.4);
  padding: 0.2em;
  margin: 0.1em;
  color: rgba(255, 255, 255, 0.7);
`
const Libraries = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
const Library = styled.li`
  background: rgba(0, 0, 0, 0.4);
  padding: 0.2em;
  margin: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75em;
`
const Content = styled.div`
  margin: 1em 0;
  color: rgba(255, 255, 255, 0.5);
`
const ProjectLink = styled(ExternalLink)`
  font-size: 0.75em;
  a {
    color: rgba(255, 255, 255, 0.9);
  }
`
const Aside = styled.aside`
  flex: 1;
  overflow: hidden;
`
const Preview = styled.img`
  max-height: 15em;
`
const ProjectItem = styled.li`
  background: rgba(0, 0, 0, 0.8);
  padding: 1em;
  margin: 1em;
  font-size: 1.5em;
  text-align: left;
  flex-direction: row-reverse;
  display: flex;

  &:nth-child(2n) {
    flex-direction: row;
    text-align: right;
    ${Libraries},
    ${Languages} {
      justify-content: flex-end;
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
  // major,
  preview,
}) {
  const allStars = useSelector(state => state.stars)
  const stars = allStars[id]

  return (
    <ProjectItem>
      <Section>
        <Name>{name}</Name>
        <Languages>
          {languages.map(language => (
            <Language key={language}>{language}</Language>
          ))}
        </Languages>
        <Libraries>
          {libraries.map(lib => (
            <Library key={lib}>{lib}</Library>
          ))}
        </Libraries>
        <Content>{description}</Content>
        <ProjectLink url={demoUrl || url}>{prettyUrl(url)}</ProjectLink>
        <Stars url={url} stars={stars} />
      </Section>
      <Aside>
        <Preview
          src={preview || defaultPreview}
          alt={`Image preview of ${name}`}
        />
      </Aside>
    </ProjectItem>
  )
}
