export function _url_basename(url:string):string {
	if (!url) return url
	const location = url.split('?')[0]
	return location?.split('/').pop()||''
}
