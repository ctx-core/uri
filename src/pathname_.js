export function pathname_() {
    const pathname = (typeof window === 'object'
        && window.location.pathname)
        || '';
    return pathname;
}
export { pathname_ as _pathname, };
//# sourceMappingURL=src/pathname_.js.map