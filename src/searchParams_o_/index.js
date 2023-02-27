/**
 * @param {URL}url
 * @returns {object}
 * @private
 */
export function searchParams_o_(url) {
  const searchParams_o = {}
	for (const [key, value] of url.searchParams) {
		searchParams_o[key] = value
	}
	return searchParams_o
}
