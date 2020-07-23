export function _url_basename(url) {
	if (!url) return url
	const location = url.split('?')[0]
	return location.split('/').pop()
}
