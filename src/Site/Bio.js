import React from 'react'
import styled from 'styled-components'

import ExternalLink from './utils/ExternalLink'
import TimeRange from './utils/TimeRange'
import bio from '../static/bio'
import Title from './utils/Title'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const StepList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 10em;
`

const Step = styled.li`
  text-align: center;
  font-size: 1.5em;
  color: #dddddd;
  margin: 0.75em;
`

export default function Bio() {
  const age = Math.floor(
    (new Date().getTime() - 523000000000) / // This is purposefully wrong
      (365 * 24 * 60 * 60 * 1000)
  )

  return (
    <Section>
      <Title>
        Bio
        <>{age} years old</>
        <>
          Living in{' '}
          <ExternalLink url="https://www.google.com/maps/place/Lyon">
            Lyon, France
          </ExternalLink>
        </>
      </Title>

      <StepList>
        {bio.map(({ start, end, name, role, url }) => (
          <Step key={name}>
            <TimeRange start={start} end={end} /> {role} at{' '}
            <ExternalLink url={url}>{name}</ExternalLink>
          </Step>
        ))}
      </StepList>
    </Section>
  )
}
