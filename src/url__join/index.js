/**
 * @param url_segment_a{import('../_types').url_segment_T[]}
 * @returns {string}
 */
export function url__join(url_segment_a) {
	return url_segment_a.reduce((url, url_segment)=>{
		const url_segment_str = url_segment.toString()
		if (~[
			'/',
			'?',
			'&'
		].indexOf(url_segment_str.slice(0, 1))) {
			return `${url}${url_segment_str}`
		} else {
			return `${url}/${url_segment_str}`
		}
	}, '')
}
export {
	url__join as join_url,
}
