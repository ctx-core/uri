import type { url_segment_type } from './url_segment_type'
export function join_url(url_segment_a1:url_segment_type[]) {
	return url_segment_a1.reduce((url, url_segment)=>{
		const url_segment_str = url_segment.toString()
		if (~['/', '?', '&'].indexOf(url_segment_str.slice(0, 1))) {
			return `${url}${url_segment_str}`
		} else {
			return `${url}/${url_segment_str}`
		}
	}, '') as string
}
