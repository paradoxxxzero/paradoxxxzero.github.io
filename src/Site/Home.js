import React from 'react'
import styled from 'styled-components'

import Title from './utils/Title'

const Section = styled.section`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
`

export default function Home() {
  return (
    <Section>
      <Title level={1}>
        Full Stack Developper
        <>Skilled Pythonist</>
        <>Seasoned ECMAScripter</>
        <>Open Source Enthousiast</>
      </Title>
    </Section>
  )
}
