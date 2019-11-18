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
          name="Kalong"
          url="https://github.com/paradoxxxzero/kalong"
          lang={['ECMAScript', 'Python']}
          lib={['React', 'Redux', 'Material-UI', 'aiohttp']}
          major
        >
          Standalone Python debugger with a web interface.
        </Project>
        <Project
          name="Frustals"
          url="https://github.com/paradoxxxzero/frustals"
          lang={['ECMAScript', 'Rust']}
          lib={['wasm-bindgen']}
          major
        >
          Fractal plotter written in Rust with a web interface base on WASM.
        </Project>
        <Project
          name="AnakataGL"
          url="https://github.com/paradoxxxzero/anakataGL"
          lang={['ECMAScript']}
          lib={['three.js']}
          major
        >
          4 dimensions mesh renderer in WebGL.
        </Project>
        <Project
          name="Inversion"
          url="https://github.com/paradoxxxzero/inversion"
          lang={['ECMAScript']}
          lib={['three.js', 'React', 'Redux']}
          major
        >
          Puzzle game in WebGL.
        </Project>
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
          architecture. Ancestor of Kalong.
        </Project>
        <Project
          name="Umlaut"
          url="https://kozea.github.io/umlaut/"
          lang={['ECMAScript']}
          lib={['d3.js', 'jQuery']}
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
          Gnome extension that displays system informations in gnome shell
          status bar, such as memory usage, cpu usage, network rates…
        </Project>
        <Project
          name="Anakata"
          url="https://paradoxxxzero.github.io/anakata/"
          lang={['ECMAScript']}
          lib={['canvas']}
          major
        >
          4 dimensions mesh renderer implemented in 2d canvas. Ancestor of
          anakataGL.
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
          name="Atom Python importmagic"
          url="https://github.com/paradoxxxzero/atom-python-import-magic"
          lang={['ECMAScript', 'Python']}
          lib={['Atom']}
        >
          Atom extension to automatically import python modules using
          importmagic and then sort using isort.
        </Project>
        <Project
          name="Atom undo tree"
          url="https://github.com/paradoxxxzero/atom-undo-tree"
          lang={['ECMAScript']}
          lib={['Atom']}
        >
          Atom extension to transform undo/redo in an undo tree similar to emacs
          default implementation.
        </Project>
        <Project
          name="Atom rainbow delimiters"
          url="https://github.com/paradoxxxzero/atom-rainbow-delimiters"
          lang={['ECMAScript']}
          lib={['Atom']}
        >
          Atom extension to highlight delimiters around the cursor.
        </Project>
        <Project
          name="Atom one theme color by project"
          url="https://github.com/paradoxxxzero/atom-one-theme-color-by-project"
          lang={['ECMAScript']}
          lib={['Atom']}
        >
          Atom extension to colorize Atom One themes according to the current
          open project.
        </Project>
        <Project
          name="Jinja2 mode"
          url="https://github.com/paradoxxxzero/jinja2-mode"
          lang={['Elisp']}
          lib={['Emacs', 'Jinja2']}
        >
          Jinja2 mode for Emacs.
        </Project>
        <Project
          name="Tornado template mode"
          url="https://github.com/paradoxxxzero/tornado-template-mode"
          lang={['Elisp']}
          lib={['Emacs', 'Jinja2']}
        >
          Tornado template mode for Emacs.
        </Project>
        <Project
          name="Graphit"
          url="http://paradoxxxzero.github.io/graphit"
          lang={['ECMAScript']}
          lib={['canvas']}
          major
        >
          Simple y = f(x) function plotter.
        </Project>
        <Project
          name="Graph.it"
          url="http://paradoxxxzero.github.io/graph.it"
          lang={['ECMAScript']}
          lib={['three.js']}
        >
          z = f(x, y) function plotter demo.
        </Project>
        <Project
          name="Nocolon"
          url="https://github.com/paradoxxxzero/nocolon"
          lang={['Python']}
          lib={[]}
        >
          UTF-8 compatible toy encoding that removes the need of colons in
          python files.
        </Project>
        <Project
          name="Gnome Shell Shader Extension"
          url="https://github.com/paradoxxxzero/gnome-shell-shader-extension"
          lang={['ECMAScript', 'glsl']}
          lib={['GLib']}
        >
          Gnome extension that allows to add glsl shaders on specific windows.
        </Project>
        <Project
          name="Gnome Shell Focus Effects Extension"
          url="https://github.com/paradoxxxzero/gnome-shell-focus-effects-extension"
          lang={['ECMAScript']}
          lib={['GLib']}
        >
          Gnome extension that allows to add custom effects on window
          focus/blur.
        </Project>
        <Project
          name="Clutterm"
          url="https://github.com/paradoxxxzero/clutterm"
          lang={['Python']}
          lib={['clutter']}
        >
          Attempt to create a clutter based terminal written in pure python.
        </Project>
        <Project
          name="Jsfsactals"
          url="https://paradoxxxzero.github.io/jsfractals"
          lang={['ECMAScript']}
          lib={['canvas', 'jQuery']}
          major
        >
          Pure js fractal drawer.
        </Project>
        <Project
          name="Wsreload"
          url="https://github.com/paradoxxxzero/wsreload"
          lang={['ECMAScript', 'Python']}
          lib={['tornado']}
        >
          Browser page reloader based on WebSocket.
        </Project>
        <Project
          name="Fawn"
          url="https://github.com/paradoxxxzero/fawn"
          lang={['Python']}
          lib={['Flask', 'uWSGI']}
          major
        >
          Flask extension allowing WebSocket uWSGI broadcasting from PostgreSQL
          notify channels.
        </Project>
        <Project
          name="Scudd"
          url="https://github.com/paradoxxxzero/scudd"
          lang={['ECMAScript']}
          lib={['React']}
          major
        >
          Small lib for inspecting React PureComponent render triggers.
        </Project>
      </Projects>
    </Main>
  )
}
