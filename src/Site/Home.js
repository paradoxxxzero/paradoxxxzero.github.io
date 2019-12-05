import React from 'react'
import styled from 'styled-components'

import Title from './utils/Title'
import AnchoredSection from './utils/AnchoredSection'

const Section = styled(AnchoredSection)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function Home() {
  return (
    <Section anchor="home">
      <Title level={1}>
        Full Stack Developper
        <>Skilled Pythonist</>
        <>Seasoned ECMAScripter</>
        <>Open Source Enthousiast</>
      </Title>
    </Section>
  )
}
