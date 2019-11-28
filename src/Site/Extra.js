import React from 'react'
import styled from 'styled-components'

import Title from './utils/Title'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 1200%;
`

export default function Extra() {
  return (
    <Section>
      <Title />
    </Section>
  )
}
