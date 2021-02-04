import { h } from 'preact'
import styled from 'styled-components'

const Item = styled.li`
  margin: 1em 0.5em;
`

export default function ListItem({ className, children }) {
  return <Item className={className}>{children}</Item>
}
