export function hostname_():string {
	const hostname =
		(typeof window === 'object'
			&& window.location.hostname)
		|| ''
	return hostname
}
export {
	hostname_ as _hostname,
}
