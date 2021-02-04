import { h } from 'preact'
import styled from 'styled-components'

const Range = styled.div`
  color: ${props => props.theme.fg.mute};
`

const BigTime = styled.time`
  color: ${props => props.theme.fg.normal};
  font-size: 1.5em;
`

const Time = styled.time`
  color: ${props => props.theme.fg.mute};
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
