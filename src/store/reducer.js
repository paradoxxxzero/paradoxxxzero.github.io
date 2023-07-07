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
  page:
    typeof window !== 'undefined'
      ? {
          width: window.innerWidth,
          height: document.body.clientHeight,
          devicePixelRatio: window.devicePixelRatio,
        }
      : { width: 1920, height: 1080, devicePixelRatio: 1 },
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
          total: action.total,
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
