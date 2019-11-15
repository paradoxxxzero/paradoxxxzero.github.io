import React from 'react'
import styled from 'styled-components'
import { GoLinkExternal } from 'react-icons/go'

const MutedExternal = styled(GoLinkExternal)`
  font-size: 0.7em;
  color: #999999;
`

export default function ExternalLink({ url, className, children }) {
  return (
    <span className={className}>
      <a rel="noreferrer noopener" href={url} target="_blank">
        {children}
      </a>
      <MutedExternal className="i" />
    </span>
  )
}
