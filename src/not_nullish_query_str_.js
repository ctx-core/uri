export function not_nullish_query_str_(query = {}) {
    const query_str_a = [];
    for (let key in query) {
        const value = query[key];
        if (value != null) {
            query_str_a.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
    }
    return query_str_a.length ? `?${query_str_a.join('&')}` : '';
}
export { not_nullish_query_str_ as _not_null_query_str, not_nullish_query_str_ as _str__query__not__null, };
//# sourceMappingURL=src/not_nullish_query_str_.js.map