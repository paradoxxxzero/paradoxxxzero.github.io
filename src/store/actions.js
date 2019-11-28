export const SET_PAGE_PROGRESSION = 'SET_PAGE_PROGRESSION'
export const setPageProgression = progression => ({
  type: SET_PAGE_PROGRESSION,
  progression,
})

export const SET_STARS = 'SET_STARS'
export const setStars = stars => ({
  type: SET_STARS,
  stars,
})

export const SET_ANCHOR = 'SET_ANCHOR'
export const setAnchor = (name, anchor) => ({
  type: SET_ANCHOR,
  name,
  anchor,
})
