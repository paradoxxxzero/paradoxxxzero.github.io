import styled from 'styled-components'
import AnchoredSection from './utils/AnchoredSection'
import Title from './utils/Title'

const Section = styled(AnchoredSection)`
  min-height: 1200%;
`

export default function Extra() {
  return (
    <Section anchor="extra">
      <Title />
    </Section>
  )
}
