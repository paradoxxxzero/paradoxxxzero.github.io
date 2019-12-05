import React from 'react'
import styled from 'styled-components'

import AnchoredSection from './utils/AnchoredSection'
import ExternalLink from './utils/ExternalLink'
import Title from './utils/Title'
import { FaHeart, FaReact } from 'react-icons/fa'

const Section = styled(AnchoredSection)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const BottomTitle = styled(Title)`
  justify-content: flex-end;
`

const Credits = styled.article`
  font-size: 2em;
  color: white;
  align-self: center;
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const CreditList = styled.ul`
  list-style: none;
`

const CreditItem = styled.li``

export default function Meta() {
  return (
    <Section anchor="meta">
      <Title>Meta</Title>
      <Credits>
        <div>
          This site has been crafted with <FaHeart /> and also:
          <CreditList>
            <CreditItem>
              <ExternalLink url="https://preactjs.com/">preact</ExternalLink>
            </CreditItem>
            <CreditItem>
              <ExternalLink url="https://redux.js.org/">redux</ExternalLink>
            </CreditItem>
            <CreditItem>
              <ExternalLink url="https://threejs.org/">three.js</ExternalLink>
            </CreditItem>
          </CreditList>
        </div>
      </Credits>
      <BottomTitle level={3}>
        Browse this site source code at
        <ExternalLink url="https://github.com/paradoxxxzero/bio">
          github.com/paradoxxxzero/bio
        </ExternalLink>
      </BottomTitle>
    </Section>
  )
}
