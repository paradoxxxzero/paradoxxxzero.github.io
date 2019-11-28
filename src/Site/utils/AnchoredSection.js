import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { setAnchor } from '../../store/actions'

export default function AnchoredSection({ anchor, className, children }) {
  const sectionRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAnchor(anchor, sectionRef.current.offsetTop))
  }, [])
  return (
    <section className={className} ref={sectionRef}>
      {children}
    </section>
  )
}
