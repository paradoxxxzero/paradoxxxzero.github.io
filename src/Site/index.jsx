import { h } from 'preact'
import { useCallback, useEffect } from 'preact/hooks'
import { useDispatch } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../static/theme'
import { setPageProgression, setPageSize } from '../store/actions'
import Bio from './Bio'
import Contact from './Contact'
import Extra from './Extra'
import Home from './Home'
import Menu from './Menu'
import Meta from './Meta'
import Projects from './Projects'

const Main = styled.main`
  position: relative;
  height: 100%;
`

export default function Site() {
  const dispatch = useDispatch()

  const onScrollRequested = useCallback(scroll => {
    document.scrollingElement.scrollTo(0, scroll)
  }, [])

  useEffect(() => {
    const onWindowResize = () => {
      dispatch(
        setPageSize(
          window.innerWidth,
          window.innerHeight,
          window.devicePixelRatio
        )
      )
    }
    const onPageScroll = event => {
      const { scrollingElement } = event.target
      const {
        clientHeight,
        scrollTop: absolute,
        scrollHeight: total,
      } = scrollingElement
      const relative = absolute / (total - clientHeight)
      dispatch(setPageProgression(relative, absolute, total))
    }
    window.addEventListener('resize', onWindowResize, false)
    window.addEventListener('touchmove', onWindowResize, false)
    window.addEventListener('scroll', onPageScroll, false)
    window.addEventListener('load', onPageScroll, false)
    return () => {
      window.removeEventListener('resize', onWindowResize)
      window.removeEventListener('touchmove', onWindowResize)
      window.removeEventListener('scroll', onPageScroll)
      window.removeEventListener('load', onPageScroll)
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Menu onScrollRequested={onScrollRequested} />
        <Home />
        <Projects type="experiments" />
        <Projects type="projects" />
        <Bio />
        <Contact />
        <Meta />
        <Extra />
      </Main>
    </ThemeProvider>
  )
}
