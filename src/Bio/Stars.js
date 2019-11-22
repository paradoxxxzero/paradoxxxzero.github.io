import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

export default styled(Stars)`
  display: 'block';
`

function Stars({ url, stars, className }) {
  return (
    <a href={url} className={className}>
      {stars} <FaStar />
    </a>
  )
}
