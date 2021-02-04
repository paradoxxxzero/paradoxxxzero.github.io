import { h, Fragment } from 'preact'
import AnchoredSection from './utils/AnchoredSection'
import Title from './utils/Title'

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
