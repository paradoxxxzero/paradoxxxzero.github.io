import React from 'react'

import Title from './utils/Title'
import AnchoredSection from './utils/AnchoredSection'

export default function Home() {
  return (
    <AnchoredSection anchor="home">
      <Title level={1}>
        Full Stack Developper
        <>Skilled Pythonist</>
        <>Seasoned ECMAScripter</>
        <>Open Source Enthousiast</>
      </Title>
    </AnchoredSection>
  )
}
