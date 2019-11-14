import { SET_PAGE_PROGRESSION } from './actions'

const initial = {
  progression: 0,
}

export default (state = initial, action) => {
  switch (action.type) {
    case SET_PAGE_PROGRESSION:
      return { ...state, progression: action.progression }
    default:
      return state
  }
}
