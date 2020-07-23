export function _query_str(query = {}) {
	const query_str_a1 = []
	for (let key in query) {
		const value = query[key]
		const value__ = value == null ? '' : value
		query_str_a1.push(`${encodeURIComponent(key)}=${encodeURIComponent(value__)}`)
	}
	return query_str_a1.length ? `?${query_str_a1.join('&')}` : ''
}
export const _str__query = _query_str
