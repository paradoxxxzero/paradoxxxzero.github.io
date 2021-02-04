import { h } from 'preact'
import { faArrowUp, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef } from 'preact/hooks'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { MOBILE_MAX_WIDTH } from '../static/consts'

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
  color: ${props => props.theme.fg.normal};
  cursor: pointer;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  &:hover {
    background: ${props => props.theme.bg.normal};
  }

  padding: 1em ${props => (props.expanded ? '2em' : '1em')};
  font-size: ${props => (props.expanded ? '1em' : '1.25em')};
`

const HIndicator = styled.div`
  position: absolute;
  background-color: ${props => props.theme.fg.normal};
  height: 5px;
  left: 0;
  top: -3px;
  transition: ${props => props.theme.animationDuration} all;
`
const VIndicator = styled.div`
  position: absolute;
  background-color: ${props => props.theme.fg.normal};
  width: 5px;
  right: 0;
  top: 0;
  transition: ${props => props.theme.animationDuration} all;
`

const Nav = styled.nav`
  backdrop-filter: blur(2px);
  position: fixed;
  right: 0;
  top: 2em;
  z-index: 42;

  ${props =>
    props.expanded &&
    css`
      border-top: 2px solid ${props => props.theme.fg.normal};
      min-width: 33%;
      max-width: max-content;
    `}
`

const MENU_ITEMS = [
  {
    name: 'home',
    content: <FontAwesomeIcon icon={faArrowUp} />,
  },
  {
    name: 'experiments',
    content: 'Experiments',
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
    name: 'contact',
    content: 'Contact',
  },
  {
    name: 'meta',
    content: 'Meta',
  },
  {
    name: 'extra',
    content: <FontAwesomeIcon icon={faSpaceShuttle} />,
  },
]

export default function Menu({ onScrollRequested }) {
  const anchors = useSelector(state => state.anchors)
  const { width: winWidth } = useSelector(state => state.page)
  const hIndicatorRef = useRef()
  const vIndicatorRef = useRef()
  const anchorsRefs = useRef({})
  const timeoutRef = useRef()

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

  const expanded =
    winWidth > MOBILE_MAX_WIDTH && active === Object.keys(anchors)[0]
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
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
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
      // TODO: Retrieve from theme
      timeoutRef.current = setTimeout(setPosition, 250)
    }
    if (expanded) {
      vIndicator.style.opacity = 0
    } else {
      hIndicator.style.opacity = 0
    }
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [hIndicatorRef, vIndicatorRef, timeoutRef, anchorsRefs, active, expanded])

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
            {expanded || typeof content !== 'string' ? content : content[0]}
          </Ref>
        ))}
      </Refs>
    </Nav>
  )
}
