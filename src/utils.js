export const prettyUrl = url => url.replace(/https?:\/\/(.*)\/?/, '$1')

export const extractStars = projects =>
  projects.reduce(
    (stars, { full_name: name, stargazers_count: starsCount }) => {
      stars[name] = starsCount
      return stars
    },
    {}
  )

export const clamp = (x, min, max) =>
  isNaN(x) ? min : Math.min(max, Math.max(min, x))

export const linearClamp = (x, { start, end }) =>
  clamp((x - start) / (end - start), 0, 1)
