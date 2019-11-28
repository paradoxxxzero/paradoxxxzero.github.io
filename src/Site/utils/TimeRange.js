import React from 'react'
import styled from 'styled-components'

const Range = styled.div`
  color: #dddddd;
`

const BigTime = styled.time`
  color: white;
  font-size: 1.5em;
`

const Time = styled.time`
  color: #bbbbbb;
  font-size: 0.75em;
`

export default function TimeRange({ start, end }) {
  return (
    <Range>
      <BigTime dateTime={end}>{end}</BigTime>
      {' ‒ '}
      <Time dateTime={start}>{start}</Time>
    </Range>
  )
}
