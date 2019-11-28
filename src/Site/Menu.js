import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Nav = styled.nav`
  position: fixed;
  bottom: 1em;
  right: 0;
  border-bottom: 2px solid white;
  min-width: 33%;
`

const Refs = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0.5em;
  padding: 0;
`

const Ref = styled.li`
  color: white;
  padding: 0.2em 2em;
  cursor: pointer;
  transition: 250ms background;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`

export default function Menu({ onScrollRequested }) {
  const anchors = useSelector(state => state.anchors)
  const goTo = anchor => () => onScrollRequested(anchors[anchor])

  return (
    <Nav anchor="extra">
      <Refs>
        <Ref anchor="home" onClick={goTo('home')}>
          Home
        </Ref>
        <Ref anchor="projects" onClick={goTo('projects')}>
          Projects
        </Ref>
        <Ref anchor="bio" onClick={goTo('bio')}>
          Bio
        </Ref>
        <Ref anchor="extra" onClick={goTo('extra')}>
          …
        </Ref>
      </Refs>
    </Nav>
  )
}
