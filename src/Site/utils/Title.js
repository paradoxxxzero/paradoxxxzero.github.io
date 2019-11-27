import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.left ? 'right' : 'left')};
  width: ${props => (props.left ? 57 : 48)}%;
  align-self: ${props => (props.left ? 'flex-start' : 'flex-end')};
`

const UnderlinedTitle = styled.div`
  width: 100%;
  color: white;
  border-bottom: 2px solid white;
  font-size: 2em;
  align-self: flex-end;
`

const SubTitle = styled.div`
  color: #eeeeee;
  font-size: 1.25em;
`

export default function Title({ level, children }) {
  level = level || 2
  const left = level === 1
  return (
    <Header left={left}>
      {React.Children.map(children, (child, i) =>
        i === 0 ? (
          <UnderlinedTitle as={`h${level}`}>{child}</UnderlinedTitle>
        ) : (
          <SubTitle>{child}</SubTitle>
        )
      )}
    </Header>
  )
}

Title.SubTitle = () => {}
