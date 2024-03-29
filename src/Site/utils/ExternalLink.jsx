import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Icon = styled.span`
  position: absolute;
  transform: scale(0);
  transition: ease-in-out ${props => props.theme.animationDuration} transform;
  top: 0;
  left: 0.25em;
  color: ${props => props.theme.fg.mute};
  font-size: 0.75em;
`
const Rel = styled.span`
  position: relative;
`
const Wrapper = styled.div`
  display: inline-block;

  &:hover ${Icon} {
    transform: scale(1);
  }
`

const Link = styled.a`
  color: ${props => props.theme.fg.clickable};
`

export default function ExternalLink({ url, className, children, ...props }) {
  return (
    <Wrapper className={className}>
      <Link rel="noreferrer noopener" href={url} target="_blank" {...props}>
        {children}
      </Link>
      <Rel>
        <Icon>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Icon>
      </Rel>
    </Wrapper>
  )
}
