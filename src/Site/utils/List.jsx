import styled from 'styled-components'

const UList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export default function List({ className, children }) {
  return <UList className={className}>{children}</UList>
}
