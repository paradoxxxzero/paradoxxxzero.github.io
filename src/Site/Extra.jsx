import styled from 'styled-components'
import AnchoredSection from './utils/AnchoredSection'

const Section1 = styled(AnchoredSection)`
  min-height: 400%;
`
const Section2 = styled(AnchoredSection)`
  min-height: 800%;
`

export default function Extra() {
  return (
    <>
      <Section1 anchor="extra"></Section1>
      <Section2 anchor="extra2"></Section2>
      <AnchoredSection anchor="end"></AnchoredSection>
    </>
  )
}
