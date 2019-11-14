import React from 'react'
import styled from 'styled-components'

import { prettyUrl } from '../utils'

export default styled(Project)`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Name = styled.h2`
  color: orangered;
`

const Link = styled.a`
  color: forestgreen;
`

function Project({ name, url }) {
  return (
    <article>
      <Name>{name}</Name>
      <Link href={url}>{prettyUrl(url)}</Link>
    </article>
  )
}
