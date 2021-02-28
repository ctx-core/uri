import { isArray } from '@ctx-core/object'
export function _query_str(query:query_T = '', prefix = '?') {
	if (typeof query === 'string') return `${prefix}${query}`
	const query_str_a1 = [] as string[]
	for (let key in query) {
		const value = query[key]
		const $value = value == null ? '' : value
		if (isArray($value)) {
			for (const $value_item of ($value as (string|number|boolean)[])) {
				query_str_a1.push(
					`${encodeURIComponent(key)}[]=${encodeURIComponent($value_item)}`
				)
			}
		} else {
			query_str_a1.push(
				`${encodeURIComponent(key)}=${encodeURIComponent($value as string|number|boolean)}`
			)
		}
	}
	return query_str_a1.length ? `${prefix}${query_str_a1.join('&')}` : ''
}
export {
	_query_str as _str__query
}
export type query_value_T =
	string|number|boolean|string[]|number[]|boolean[]|(string|number)[]|(string|boolean)[]
	|(number|boolean)[]|(string|number|boolean)[]
export type query_T = string|{ [key:string]:query_value_T }|Record<string, query_value_T>
export type query_type = query_T
