import React from 'react'

import ExternalLink from './utils/ExternalLink'
import TimeRange from './utils/TimeRange'
import bio from '../static/bio'
import Title from './utils/Title'
import AnchoredSection from './utils/AnchoredSection'
import Content from './utils/Content'
import List from './utils/List'
import ListItem from './utils/ListItem'

export default function Bio() {
  const age = Math.floor(
    (new Date().getTime() - 523000000000) / // This is purposefully wrong
      (365 * 24 * 60 * 60 * 1000)
  )

  return (
    <AnchoredSection anchor="bio">
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
      <Content>
        <List>
          {bio.map(({ start, end, name, role, url }) => (
            <ListItem key={name}>
              <TimeRange start={start} end={end} /> {role} at{' '}
              <ExternalLink url={url}>{name}</ExternalLink>
            </ListItem>
          ))}
        </List>
      </Content>
    </AnchoredSection>
  )
}
