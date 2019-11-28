import { SET_PAGE_PROGRESSION, SET_STARS, SET_ANCHOR } from './actions'
import projects from '../static/projects'

const initial = {
  progression: 0,
  projects,
  stars: {},
  anchors: {},
}

export default (state = initial, action) => {
  switch (action.type) {
    case SET_PAGE_PROGRESSION:
      return { ...state, progression: action.progression }
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
