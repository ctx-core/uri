export function url_basename_(url) {
    if (!url)
        return url;
    const location = url.split('?')[0];
    return (location === null || location === void 0 ? void 0 : location.split('/').pop()) || '';
}
export { url_basename_ as _url_basename, };
//# sourceMappingURL=src/url_basename_.js.map