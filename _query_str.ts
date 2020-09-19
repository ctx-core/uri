export function _query_str(query:query_type = '', prefix = '?') {
	if (typeof query === 'string') return `${prefix}${query}`
	const query_str_a1 = [] as string[]
	for (let key in query) {
		const value = query[key]
		const $value = value == null ? '' : value
		query_str_a1.push(`${encodeURIComponent(key)}=${encodeURIComponent($value)}`)
	}
	return query_str_a1.length ? `${prefix}${query_str_a1.join('&')}` : ''
}
export const _str__query = _query_str
export type query_type = string|Record<string, string|number|boolean>
