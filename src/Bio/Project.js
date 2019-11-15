import React from 'react'
import styled from 'styled-components'

import { prettyUrl } from '../utils'

const Article = styled.article`
  background: rgba(0, 0, 0, 0.2);
  font-size: 1.5em;
  text-align: center;
`
const Name = styled.h2`
  color: rgba(255, 255, 255, 0.9);
`

const Link = styled.a`
  color: forestgreen;
`

export default function Project({ name, url, odd }) {
  return (
    <Article odd={odd}>
      <Name>{name}</Name>
      <Link href={url}>{prettyUrl(url)}</Link>
    </Article>
  )
}
