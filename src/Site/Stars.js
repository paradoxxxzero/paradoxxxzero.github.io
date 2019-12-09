import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

export const Star = styled.a`
  display: flex;
  color: gold;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const Number = styled.span`
  color: ${props => props.theme.fg.normal};
`

export default function Stars({ url, stars, className }) {
  if (stars === null || stars === undefined) {
    stars = null
  }

  return (
    <Star href={url} className={className}>
      <Number>{stars ? stars : ''}</Number>
      <span>&nbsp;</span>
      <FaStar />
    </Star>
  )
}
