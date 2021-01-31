export function _hostname() {
	const hostname =
		(typeof window === 'object'
			&& window.location.hostname)
		|| ''
	return hostname
}
