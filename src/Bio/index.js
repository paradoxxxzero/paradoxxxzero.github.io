import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import { setPageProgression } from '../store/actions'
import Project from './Project'

const FontFace = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Asap&display=swap');
    font-family: 'Asap', sans-serif;
  }
`

const Main = styled.main`
  position: relative;
  height: 100%;
  overflow: auto;
`
const Hero = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: middle;
  color: white;
`

const Projects = styled.section`
  max-width: 1000px;
  margin: 2em;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`

export default function Bio() {
  const dispatch = useDispatch()
  const handleScroll = event => {
    const { target } = event
    const { clientHeight, scrollTop, scrollHeight } = target
    const progression = scrollTop / (scrollHeight - clientHeight)
    dispatch(setPageProgression(progression))
  }
  return (
    <Main onScroll={handleScroll}>
      <FontFace />
      <Hero>
        <Title>Florian Mounier</Title>
      </Hero>
      <Projects>
        <h1>Projects</h1>
        <Project
          name="Formol"
          url="https://kozea.github.io/formol/"
          lang={['ECMAScript']}
          lib={['React']}
          major
        >
          Full featured object edition form framework for React.
        </Project>
        <Project
          name="Unrest"
          url="https://kozea.github.io/unrest/"
          lang={['Python']}
          lib={['SqlAlchemy', 'Flask', 'Tornado', 'Sanic']}
          major
        >
          Simple sqlalchemy REST API generation.
        </Project>
        <Project
          name="Butterfly"
          url="https://github.com/paradoxxxzero/butterfly"
          lang={['Python', 'ECMAScript']}
          lib={['Tornado']}
          major
        >
          Xterm compatible terminal that runs in your browser.
        </Project>
        <Project
          name="Pygal"
          url="http://www.pygal.org/"
          lang={['Python']}
          lib={['lxml']}
          major
        >
          Python charting library with a clean and simple API.
        </Project>
        <Project
          name="Wdb"
          url="https://github.com/Kozea/wdb"
          lang={['Python', 'ECMAScript']}
          lib={['tornado']}
          major
        >
          Full featured web debugger for python based on a client-server
          architecture.
        </Project>
        <Project
          name="Umlaut"
          url="https://kozea.github.io/umlaut/"
          lang={['ECMAScript']}
          lib={['d3.js', 'jquery']}
          major
        >
          Simple SVG diagram modeler with dot support.
        </Project>
        <Project
          name="System Monitor"
          url="https://github.com/paradoxxxzero/gnome-shell-system-monitor-applet"
          lang={['ECMAScript']}
          lib={['GLib']}
          major
        >
          Display system informations in gnome shell status bar, such as memory
          usage, cpu usage, network rates…
        </Project>
        <Project
          name="Anakata"
          url="https://paradoxxxzero.github.io/anakata/"
          lang={['ECMAScript']}
          lib={['canvas']}
          major
        >
          4 dimension mesh renderer implemented in 2d canvas.
        </Project>
        <Project
          name="Hanabi"
          url="https://paradoxxxzero.github.io/hanabi/"
          lang={['ECMAScript']}
          lib={['canvas']}
        >
          Fireworks in canvas.
        </Project>
        <Project
          name="Bemboo"
          url="https://github.com/paradoxxxzero/bemboo"
          lang={['ECMAScript']}
          lib={['React']}
        >
          BEM generator based on objects for React 16+.
        </Project>
        <Project
          name="atom-undo-tree"
          url="https://github.com/paradoxxxzero/atom-undo-tree"
          lang={['ECMAScript']}
          lib={['Atom']}
        >
          Atom extension to transform undo/redo in an undo tree similar to emacs
          default implementation.
        </Project>
        <Project
          name="atom-undo-tree"
          url="https://github.com/paradoxxxzero/atom-undo-tree"
          lang={['ECMAScript']}
          lib={['Atom']}
        >
          Atom extension to transform undo/redo in an undo tree similar to emacs
          default implementation.
        </Project>
        <Project
          name="atom-one-theme-color-by-project"
          url="https://github.com/paradoxxxzero/atom-one-theme-color-by-project"
          lang={['ECMAScript']}
          lib={['Atom']}
        >
          Atom extension to colorize Atom One themes according to the current
          open project.
        </Project>
        <Project
          name="jinja2-mode"
          url="https://github.com/paradoxxxzero/jinja2-mode"
          lang={['Elisp']}
          lib={['Emacs', 'Jinja2']}
        >
          Jinja2 mode for Emacs.
        </Project>
      </Projects>
    </Main>
  )
}
