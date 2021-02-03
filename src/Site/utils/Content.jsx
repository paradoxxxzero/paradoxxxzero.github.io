import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  margin: 1em;
  font-size: 1.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.fg.normal};
  align-self: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: ${props => props.theme.bg.normal};
  backdrop-filter: blur(5px);
`

export default function Content({ className, children }) {
  return (
    <Article className={className}>
      <Container>{children}</Container>
    </Article>
  )
}
