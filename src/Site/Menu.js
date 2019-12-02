import React, { useRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'
import { FaArrowUp, FaSpaceShuttle } from 'react-icons/fa'

const ANIMATION_TIME = 250

const Refs = styled.ul`
  position: relative;
  display: flex;
  flex-direction: ${props => (props.expanded ? 'row' : 'column')};
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`

const Ref = styled.li`
  color: white;
  cursor: pointer;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  padding: 1rem ${props => (props.expanded ? '2rem' : '1rem')};
  font-size: ${props => (props.expanded ? '1rem' : '0')};
  transition: ${`${ANIMATION_TIME}ms`} all;
  ${props =>
    !props.expanded &&
    css`
      & > *,
      &:first-letter {
        font-size: 1.5rem;
      }
    `}
`

const HIndicator = styled.div`
  position: absolute;
  background-color: white;
  height: 5px;
  left: 0;
  top: -3px;
  transition: ${`${ANIMATION_TIME}ms`} all;
`
const VIndicator = styled.div`
  position: absolute;
  background-color: white;
  width: 5px;
  right: 0;
  top: 0;
  transition: ${`${ANIMATION_TIME}ms`} all;
`

const Nav = styled.nav`
  position: fixed;
  right: 0;
  top: 2em;
  ${props =>
    props.expanded &&
    css`
      border-top: 2px solid white;
      min-width: 33%;
      max-width: max-content;
    `}
`

const MENU_ITEMS = [
  {
    name: 'home',
    content: <FaArrowUp />,
  },
  {
    name: 'projects',
    content: 'Projects',
  },
  {
    name: 'bio',
    content: 'Bio',
  },
  {
    name: 'extra',
    content: <FaSpaceShuttle />,
  },
]

export default function Menu({ onScrollRequested }) {
  const anchors = useSelector(state => state.anchors)
  const hIndicatorRef = useRef()
  const vIndicatorRef = useRef()
  const anchorsRefs = useRef({})

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

  const expanded = active === Object.keys(anchors)[0]
  const goTo = anchor => () => onScrollRequested(anchors[anchor])
  const setAnchorRef = anchor => ref => {
    anchorsRefs.current[anchor] = ref
  }

  useEffect(() => {
    const { current: hIndicator } = hIndicatorRef
    const { current: vIndicator } = vIndicatorRef
    if (!active) {
      return
    }
    const anchor = anchorsRefs.current[active]
    const setPosition = () => {
      if (expanded) {
        hIndicator.style.left = `${anchor.offsetLeft}px`
        hIndicator.style.width = `${anchor.clientWidth}px`
      } else {
        vIndicator.style.top = `${anchor.offsetTop}px`
        vIndicator.style.height = `${anchor.clientHeight}px`
      }
      if (expanded) {
        hIndicator.style.opacity = 1
      } else {
        vIndicator.style.opacity = 1
      }
    }
    if (!expanded && +hIndicator.style.opacity === 0) {
      setPosition()
    } else {
      // Wait for css animation
      setTimeout(setPosition, ANIMATION_TIME)
    }
    if (expanded) {
      vIndicator.style.opacity = 0
    } else {
      hIndicator.style.opacity = 0
    }
  }, [hIndicatorRef, vIndicatorRef, anchorsRefs, active, expanded])

  return (
    <Nav anchor="extra" expanded={expanded}>
      <HIndicator ref={hIndicatorRef} />
      <VIndicator ref={vIndicatorRef} />
      <Refs expanded={expanded}>
        {MENU_ITEMS.map(({ name, content }) => (
          <Ref
            key={name}
            anchor={name}
            active={active === name}
            onClick={goTo(name)}
            ref={setAnchorRef(name)}
            title={typeof content === 'string' ? content : null}
            expanded={expanded}
          >
            {content}
          </Ref>
        ))}
      </Refs>
    </Nav>
  )
}
