export function join_url(url_segment_a) {
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
