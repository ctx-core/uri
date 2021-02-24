export function _hostname():string {
	const hostname =
		(typeof window === 'object'
			&& window.location.hostname)
		|| ''
	return hostname
}
