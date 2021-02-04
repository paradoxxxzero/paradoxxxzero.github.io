import { h } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setAnchor } from '../../store/actions'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
`

export default function AnchoredSection({ anchor, className, children }) {
  const sectionRef = useRef()
  const dispatch = useDispatch()
  const { width, height } = useSelector(state => state.page)
  const updateAnchor = useCallback(
    () => dispatch(setAnchor(anchor, sectionRef.current.offsetTop)),
    [dispatch, anchor, width, height] // eslint-disable-line react-hooks/exhaustive-deps
  )

  useEffect(() => {
    updateAnchor()
    window.addEventListener('load', updateAnchor, false)
    return () => window.removeEventListener('load', updateAnchor)
  }, [updateAnchor])

  return (
    <Section className={className} ref={sectionRef}>
      {children}
    </Section>
  )
}
