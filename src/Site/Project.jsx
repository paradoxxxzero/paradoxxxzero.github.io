import { h } from 'preact'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { MOBILE_MAX_WIDTH } from '../static/consts'
import defaultPreview from '../static/previews/default.png'
import { prettyUrl } from '../utils'
import Stars, { Star } from './Stars'
import ExternalLink from './utils/ExternalLink'

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
const Subtle = styled.span`
  font-size: 0.5em;
  color: ${props => props.theme.fg.mute};
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
  position: relative;

  &::before {
    position: absolute;
    pointer-events: none;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      hsla(0, 0%, 0%, 0) 0,
      hsla(0, 0%, 0%, 0) 40%,
      hsla(0, 0%, 0%, 0.1) 80%,
      hsla(0, 0%, 0%, 0.1) 85%,
      hsla(0, 0%, 0%, 0.05) 100%
    );
  }
`
const TitleLink = styled(ExternalLink)`
  a {
    color: inherit;
    text-decoration: none;
  }
`
const ProjectLink = styled(ExternalLink)`
  @media (max-width: ${`${MOBILE_MAX_WIDTH}px`}) {
    word-break: break-all;
  }
`

const Preview = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 256px;
`
const ProjectItem = styled.li`
  background: ${props => props.theme.bg.normal};
  ${props =>
    props.unreleased &&
    css`
      filter: grayscale(1);
      pointer-events: none;
    `};

  margin: 1em;
  font-size: ${props => (props.major ? '1.5em' : '1.15em')};
  text-align: left;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${`${MOBILE_MAX_WIDTH}px`}) {
    flex-direction: column-reverse;
  }

  &:nth-child(2n) {
    flex-direction: row;
    @media (max-width: ${`${MOBILE_MAX_WIDTH}px`}) {
      flex-direction: column-reverse;
    }
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
  unreleased,
}) {
  const allStars = useSelector(state => state.stars)
  const stars = allStars[id]
  const projectUrl = demoUrl || url

  return (
    <ProjectItem major={major} unreleased={unreleased}>
      <Article>
        <Name>
          <TitleLink url={projectUrl}>
            {name}
            {unreleased && <Subtle> Unreleased</Subtle>}
          </TitleLink>
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
        <ProjectLink url={projectUrl}>{prettyUrl(projectUrl)}</ProjectLink>
      </Article>
      <Aside>
        <WrappingExternalLink url={projectUrl}>
          <Preview
            src={preview || defaultPreview}
            alt={`Image preview of ${name}`}
          />
        </WrappingExternalLink>
      </Aside>
    </ProjectItem>
  )
}
