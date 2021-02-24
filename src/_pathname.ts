export function _pathname():string {
	const pathname =
		(typeof window === 'object'
			&& window.location.pathname)
		|| ''
	return pathname
}
