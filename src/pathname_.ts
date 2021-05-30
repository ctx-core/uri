export function pathname_():string {
	const pathname =
		(typeof window === 'object'
			&& window.location.pathname)
		|| ''
	return pathname
}
export {
	pathname_ as _pathname,
}
