import ExternalLink from './utils/ExternalLink'
import TimeRange from './utils/TimeRange'
import bio from '../static/bio'
import Title from './utils/Title'
import AnchoredSection from './utils/AnchoredSection'
import Content from './utils/Content'
import List from './utils/List'
import ListItem from './utils/ListItem'
import { styled } from 'styled-components'

const Role = styled.div`
  margin-left: 1em;
  margin-top: 0.25em;
  margin-bottom: 0.5em;
`

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
          {bio.map(({ start, end, activities }) => (
            <ListItem key={activities.map(({ name }) => name).join('|')}>
              <TimeRange start={start} end={end} />
              {activities.map(({ name, role, url }) => (
                <Role key={url}>
                  {role} at <ExternalLink url={url}>{name}</ExternalLink>
                </Role>
              ))}
            </ListItem>
          ))}
        </List>
      </Content>
    </AnchoredSection>
  )
}
