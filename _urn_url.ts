/**
 * Converts a urn to a url
 * @param {string} uri
 * @returns {string}
 * @see {@link https://danielmiessler.com/study/url-uri/}
 */
export function _urn_url(uri) {
	if (!uri) return uri
	if (
		uri.indexOf('//') === 0
		|| uri.indexOf('http://') === 0
		|| uri.indexOf('https://') === 0
	) return uri
	return `//${uri}`
}
export const _url__urn = _urn_url
