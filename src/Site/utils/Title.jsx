import { Children } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  margin-top: 2em;
  margin-bottom: 2em;
  margin-right: ${props => (props.$left ? '1em' : 0)};
  margin-left: ${props => (props.$left ? 0 : '1em')};
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.$left ? 'right' : 'left')};
  min-width: ${props => (props.$left ? 57 : 48)}%;
  align-self: ${props => (props.$left ? 'flex-start' : 'flex-end')};
`

const UnderlinedTitle = styled.div`
  width: 100%;
  color: ${props => props.theme.fg.normal};
  border-bottom: 2px solid ${props => props.theme.fg.normal};
  font-size: 2em;
  align-self: flex-end;
  margin-left: ${props => (props.$left ? '1em' : 0)};
  margin-bottom: 0.5em;
`

const SubTitle = styled.div`
  color: ${props => props.theme.fg.mute};
  font-size: 1.25em;
  margin-left: ${props => (props.$left ? '1em' : 0)};
  margin-right: ${props => (props.$left ? 0 : '1em')};
`

export default function Title({ level, children, className }) {
  level = level || 2
  const left = level % 2

  return (
    <Header $left={left} className={className}>
      {Children.map(children, (child, i) =>
        i === 0 ? (
          <UnderlinedTitle as={`h${level}`} $left={left}>
            {child}
          </UnderlinedTitle>
        ) : (
          <SubTitle $left={left}>{child}</SubTitle>
        )
      )}
    </Header>
  )
}
