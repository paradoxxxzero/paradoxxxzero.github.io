import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Star = styled.a`
  display: flex;
  color: gold;
  text-decoration: none;
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
      <FontAwesomeIcon icon={faStar} />
    </Star>
  )
}
