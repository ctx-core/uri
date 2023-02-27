import { isArray } from '@ctx-core/object'
/**
 * @param {import('./index.d.ts').query_T}[query]
 * @param {string}[prefix]
 * @returns {string}
 * @private
 */
export function query_str_(query = '', prefix = '?') {
	if (typeof query === 'string') return `${prefix}${query}`
	const query_str_a = []
	for (let key in query) {
		const in_value = query[key]
		const value = in_value == null ? '' : in_value
		if (isArray(value)) {
			for (const $value_item of value) {
				query_str_a.push(`${encodeURIComponent(key)}[]=${encodeURIComponent($value_item)}`)
			}
		} else {
			query_str_a.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		}
	}
	return query_str_a.length ? `${prefix}${query_str_a.join('&')}` : ''
}
export {
	query_str_ as _str__query,
	query_str_ as _query_str,
}
