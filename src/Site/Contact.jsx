import {
  faGithub,
  faGitlab,
  faRedditAlien,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faRegEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnchoredSection from './utils/AnchoredSection'
import Content from './utils/Content'
import ExternalLink from './utils/ExternalLink'
import List from './utils/List'
import ListItem from './utils/ListItem'
import Title from './utils/Title'

export default function Contact() {
  return (
    <AnchoredSection anchor="contact">
      <Title>Contact</Title>
      <Content>
        <List>
          <ListItem>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;
            <ExternalLink
              url="mailto:mounier.florian+dev@gmail.com"
              title="Professional"
            >
              mounier.florian@gmail.com
            </ExternalLink>
            &nbsp;
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faRegEnvelope} />
            &nbsp;
            <ExternalLink
              url="mailto:paradoxxx.zero+dev@gmail.com"
              title="Personal"
            >
              paradoxxx.zero@gmail.com
            </ExternalLink>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;
            <ExternalLink url="https://github.com/paradoxxxzero" title="github">
              paradoxxxzero
            </ExternalLink>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faGitlab} />
            &nbsp;
            <ExternalLink url="https://gitlab.com/paradoxxxzero" title="gitlab">
              paradoxxxzero
            </ExternalLink>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faRedditAlien} />
            &nbsp;
            <ExternalLink
              url="https://www.reddit.com/user/paradoxxx_zero"
              title="reddit"
            >
              paradoxxx_zero
            </ExternalLink>
          </ListItem>
        </List>
      </Content>
    </AnchoredSection>
  )
}
