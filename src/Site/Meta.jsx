import styled from 'styled-components'
import AnchoredSection from './utils/AnchoredSection'
import Content from './utils/Content'
import ExternalLink from './utils/ExternalLink'
import List from './utils/List'
import ListItem from './utils/ListItem'
import Title from './utils/Title'

const ListTitle = styled.p`
  margin-top: 0.5em;
`

const BottomTitle = styled(Title)`
  justify-content: flex-end;
`

export default function Meta() {
  return (
    <AnchoredSection anchor="meta">
      <Title>Meta</Title>
      <Content>
        <ListTitle>
          This site has been hand-crafted with the help of these wonderful
          libraries:
        </ListTitle>
        <List>
          <ListItem>
            <ExternalLink url="https://react.dev/">React</ExternalLink> &mdash;
            for building the structure.
          </ListItem>
          <ListItem>
            <ExternalLink url="https://redux.js.org/">redux</ExternalLink>{' '}
            &mdash; for containing this application state.
          </ListItem>
          <ListItem>
            <ExternalLink url="https://threejs.org/">three.js</ExternalLink>{' '}
            &mdash; for a simple and powerful API on top of WebGL.
          </ListItem>
          <ListItem>
            <ExternalLink url="https://vitejs.dev/">vite</ExternalLink> &mdash;
            to put everything together.
          </ListItem>
        </List>
      </Content>
      <BottomTitle $level={3}>
        Browse this site source code at
        <ExternalLink url="https://github.com/paradoxxxzero/paradoxxxzero.github.io/tree/src">
          github.com/paradoxxxzero/paradoxxxzero.github.io
        </ExternalLink>
      </BottomTitle>
    </AnchoredSection>
  )
}
