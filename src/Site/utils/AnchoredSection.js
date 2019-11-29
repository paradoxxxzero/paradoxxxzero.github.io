import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setAnchor } from '../../store/actions'

export default function AnchoredSection({ anchor, className, children }) {
  const sectionRef = useRef()
  const dispatch = useDispatch()
  const { width: pageWidth } = useSelector(state => state.page)
  useEffect(() => {
    dispatch(setAnchor(anchor, sectionRef.current.offsetTop))
  }, [pageWidth])
  return (
    <section className={className} ref={sectionRef}>
      {children}
    </section>
  )
}
