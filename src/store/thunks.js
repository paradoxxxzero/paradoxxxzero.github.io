import { extractStars } from '../utils'
import { setStars } from './actions'

const GITHUB_PAGINATION_SIZE = 50

const fetchJson = async url => {
  const response = await fetch(url)
  const [contentType] = (response.headers.get('Content-Type') || '').split(';')

  if (response.status > 300 || response.status < 200) {
    if (contentType !== 'application/json') {
      const text = await response.text()
      throw Error(response.status, text)
    }
    const json = await response.json()
    throw Error(response.status, json.message || json.description, json)
  }

  return { data: await response.json(), response }
}

const paginateRepos = async user => {
  const url = page =>
    `https://api.github.com/${user}/repos?per_page=${GITHUB_PAGINATION_SIZE}&page=${page}`

  const { data, response } = await fetchJson(url(1))
  const link = response.headers.get('Link')
  const lastPage = +link.match(/<.+page=(\d+)>;\srel="last"/)[1]
  if (lastPage !== 1) {
    ;(
      await Promise.all(
        new Array(lastPage - 1).fill().map((_, i) => fetchJson(url(i + 2)))
      )
    ).map(({ data: pageData }) => data.push(...pageData))
  }
  return data
}

export const fetchStars = () => async dispatch => {
  const [paradoxxxzeroJson, KozeaJson] = await Promise.all(
    ['users/paradoxxxzero', 'orgs/Kozea'].map(user => paginateRepos(user))
  )

  const stars = {
    ...extractStars(paradoxxxzeroJson),
    ...extractStars(KozeaJson),
  }
  return dispatch(setStars(stars))
}
