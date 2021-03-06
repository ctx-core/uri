import { isArray } from '@ctx-core/object'
export function query_str_(query:query_T = '', prefix = '?'):string {
	if (typeof query === 'string') return `${prefix}${query}`
	const query_str_a = [] as string[]
	for (let key in query) {
		const in_value = query[key]
		const value = in_value == null ? '' : in_value
		if (isArray(value)) {
			for (const $value_item of (value as (string|number|boolean)[])) {
				query_str_a.push(
					`${encodeURIComponent(key)}[]=${encodeURIComponent($value_item)}`
				)
			}
		} else {
			query_str_a.push(
				`${encodeURIComponent(key)}=${encodeURIComponent(value as string|number|boolean)}`
			)
		}
	}
	return query_str_a.length ? `${prefix}${query_str_a.join('&')}` : ''
}
export {
	query_str_ as _str__query
}
export type query_value_T =
	string|number|boolean|string[]|number[]|boolean[]|(string|number)[]|(string|boolean)[]
	|(number|boolean)[]|(string|number|boolean)[]
export type query_T = string|{ [key:string]:query_value_T }|Record<string, query_value_T>
export type query_type = query_T
export {
	query_str_ as _query_str,
}
