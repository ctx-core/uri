export function _pathname() {
	const pathname =
		(typeof window === 'object'
			&& window.location.pathname)
		|| ''
	return pathname
}
