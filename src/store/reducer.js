import {
  SET_PAGE_PROGRESSION,
  SET_STARS,
  SET_ANCHOR,
  SET_PAGE_SIZE,
} from './actions'
import projects from '../static/projects'

const initial = {
  progression: {
    relative: 0,
    absolute: 0,
    direction: 'up',
  },
  page: {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
  },
  projects,
  stars: {},
  anchors: {},
}

export default (state = initial, action) => {
  switch (action.type) {
    case SET_PAGE_PROGRESSION:
      return {
        ...state,
        progression: {
          relative: action.relative,
          absolute: action.absolute,
          direction:
            action.absolute - state.progression.absolute > 0 ? 'down' : 'up',
        },
      }
    case SET_PAGE_SIZE:
      return {
        ...state,
        page: {
          ...state.page,
          width: action.width,
          height: action.height,
          devicePixelRatio: action.devicePixelRatio,
        },
      }
    case SET_STARS:
      return { ...state, stars: action.stars }
    case SET_ANCHOR:
      return {
        ...state,
        anchors: { ...state.anchors, [action.name]: action.anchor },
      }
    default:
      return state
  }
}
