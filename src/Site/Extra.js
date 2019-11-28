import React from 'react'
import styled from 'styled-components'

import Title from './utils/Title'
import AnchoredSection from './utils/AnchoredSection'

const Section = styled(AnchoredSection)`
  display: flex;
  flex-direction: column;
  min-height: 1200%;
`

export default function Extra() {
  return (
    <Section anchor="extra">
      <Title />
    </Section>
  )
}
