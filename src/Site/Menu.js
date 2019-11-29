import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FaArrowUp } from 'react-icons/fa'

const Nav = styled.nav`
  position: fixed;
  right: 0;
  position: sticky;
  margin: 0 0 0 auto;
  top: 2em;
  border-top: 2px solid white;
  min-width: 33%;
  max-width: max-content;
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
  const { width: pageWidth } = useSelector(state => state.page)
  const { absolute: absoluteProgression } = useSelector(
    state => state.progression
  )
  const active = Object.entries(anchors)
    .sort((a, b) => a[1] - b[1]) // Sort on anchors
    .reduce(
      (current, [name, anchor]) =>
        absoluteProgression >= anchor ? name : current,
      null
    )

  const goTo = anchor => () => onScrollRequested(anchors[anchor])

  return (
    <Nav anchor="extra">
      <Refs>
        <Ref anchor="home" onClick={goTo('home')}>
          <FaArrowUp />
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
