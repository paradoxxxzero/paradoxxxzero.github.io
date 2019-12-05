import React, { useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setAnchor } from '../../store/actions'

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
    <section className={className} ref={sectionRef}>
      {children}
    </section>
  )
}
