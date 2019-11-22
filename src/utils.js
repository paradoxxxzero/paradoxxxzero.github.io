export const prettyUrl = url => url.replace(/https?:\/\/(.*)\/?/, '$1')

export const extractStars = projects =>
  projects.reduce(
    (stars, { full_name: name, stargazers_count: starsCount }) => {
      stars[name] = starsCount
      return stars
    },
    {}
  )
