import { SET_PAGE_PROGRESSION, SET_STARS } from './actions'
import projects from '../static/projects'

const initial = {
  progression: 0,
  projects,
  stars: {},
}

export default (state = initial, action) => {
  switch (action.type) {
    case SET_PAGE_PROGRESSION:
      return { ...state, progression: action.progression }
    case SET_STARS:
      return { ...state, stars: action.stars }
    default:
      return state
  }
}
