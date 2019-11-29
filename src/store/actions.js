export const SET_PAGE_PROGRESSION = 'SET_PAGE_PROGRESSION'
export const setPageProgression = (relative, absolute) => ({
  type: SET_PAGE_PROGRESSION,
  relative,
  absolute,
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

export const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
export const setPageSize = (width, height, devicePixelRatio) => ({
  type: SET_PAGE_SIZE,
  width,
  height,
  devicePixelRatio,
})
