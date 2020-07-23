export function _not_null_query_str(query = {}) {
	const query_str_a1 = []
	for (let key in query) {
		const value = query[key]
		if (value != null) {
			query_str_a1.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		}
	}
	return query_str_a1.length ? `?${query_str_a1.join('&')}` : ''
}
export const _str__query__not__null = _not_null_query_str
