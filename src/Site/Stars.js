import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

export default styled(Stars)`
  display: block;
  text-decoration: none;
  color: gold;
`

function Stars({ url, stars, className }) {
  if (stars === null || stars === undefined) {
    return null
  }

  return (
    <a href={url} className={className}>
      {stars ? stars : ''} <FaStar />
    </a>
  )
}
