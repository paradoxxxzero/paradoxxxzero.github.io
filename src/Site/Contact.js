import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

import AnchoredSection from './utils/AnchoredSection'
import ExternalLink from './utils/ExternalLink'
import Title from './utils/Title'

const Section = styled(AnchoredSection)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const CenteredTitle = styled(Title)`
  flex: 1;
  justify-content: center;
`

const MailLink = styled.a`
  color: inherit;
  text-decoration: none;
  word-break: break-all;
`

export default function Contact() {
  return (
    <Section anchor="contact">
      <Title>Contact</Title>
      <CenteredTitle level={3}>
        <MailLink href="mailto:mounier.florian+dev@gmail.com">
          mounier.florian@gmail.com
        </MailLink>
        <>
          <FaGithub />
          &nbsp;
          <ExternalLink url="https://github.com/paradoxxxzero">
            paradoxxxzero
          </ExternalLink>
        </>
      </CenteredTitle>
    </Section>
  )
}
