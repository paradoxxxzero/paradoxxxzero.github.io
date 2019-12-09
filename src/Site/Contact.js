import React from 'react'
import {
  FaGithub,
  FaEnvelope,
  FaRedditAlien,
  FaEnvelopeOpen,
  FaGitlab,
} from 'react-icons/fa'

import AnchoredSection from './utils/AnchoredSection'
import ExternalLink from './utils/ExternalLink'
import Title from './utils/Title'
import Content from './utils/Content'
import ListItem from './utils/ListItem'
import List from './utils/List'

export default function Contact() {
  return (
    <AnchoredSection anchor="contact">
      <Title>Contact</Title>
      <Content>
        <List>
          <ListItem>
            <FaEnvelope />
            &nbsp;
            <ExternalLink url="mailto:mounier.florian+dev@gmail.com">
              mounier.florian@gmail.com
            </ExternalLink>
            &nbsp;(Pro)
          </ListItem>
          <ListItem>
            <FaEnvelopeOpen />
            &nbsp;
            <ExternalLink url="mailto:paradoxxx.zero+dev@gmail.com">
              paradoxxx.zero@gmail.com
            </ExternalLink>
          </ListItem>
          <ListItem>
            <FaGithub />
            &nbsp;
            <ExternalLink url="https://github.com/paradoxxxzero">
              paradoxxxzero
            </ExternalLink>
          </ListItem>
          <ListItem>
            <FaGitlab />
            &nbsp;
            <ExternalLink url="https://gitlab.com/paradoxxxzero">
              paradoxxxzero
            </ExternalLink>
          </ListItem>
          <ListItem>
            <FaRedditAlien />
            &nbsp;
            <ExternalLink url="https://www.reddit.com/user/paradoxxx_zero">
              paradoxxx_zero
            </ExternalLink>
          </ListItem>
        </List>
      </Content>
    </AnchoredSection>
  )
}
