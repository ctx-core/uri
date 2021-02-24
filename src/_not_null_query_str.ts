export function _not_null_query_str(query = {}):string {
	const query_str_a1 = [] as string[]
	for (let key in query) {
		const value = query[key]
		if (value != null) {
			query_str_a1.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		}
	}
	return query_str_a1.length ? `?${query_str_a1.join('&')}` : ''
}
export {
	_not_null_query_str as _str__query__not__null
}
