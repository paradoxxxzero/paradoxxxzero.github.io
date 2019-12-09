import React from 'react'
import styled from 'styled-components'
import { GoLinkExternal } from 'react-icons/go'

const Icon = styled.span`
  position: absolute;
  transform: scale(0);
  transition: ease-in-out ${props => props.theme.animationDuration} transform;
  bottom: 0;
  left: 0.25em;
`
const Rel = styled.span`
  position: relative;
`
const Wrapper = styled.span`
  &:hover ${Icon} {
    transform: scale(1);
  }
`

const Link = styled.a`
  color: ${props => props.theme.fg.clickable};
  word-break: break-all;
`

export default function ExternalLink({ url, className, children }) {
  return (
    <Wrapper className={className}>
      <Link rel="noreferrer noopener" href={url} target="_blank">
        {children}
      </Link>
      <Rel>
        <Icon>
          <GoLinkExternal />
        </Icon>
      </Rel>
    </Wrapper>
  )
}
