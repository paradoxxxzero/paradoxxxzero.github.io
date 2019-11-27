import React from 'react'
import styled from 'styled-components'
import { GoLinkExternal } from 'react-icons/go'

const MutedExternal = styled(GoLinkExternal)`
  font-size: 0.7em;
  color: #999999;
  margin-right: 1em;
`

const Link = styled.a`
  color: #aaaaaa;
`

export default function ExternalLink({ url, className, children }) {
  return (
    <span className={className}>
      <Link rel="noreferrer noopener" href={url} target="_blank">
        {children}
      </Link>
      &nbsp;
      <MutedExternal />
    </span>
  )
}
