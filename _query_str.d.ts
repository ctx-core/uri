export declare function _query_str(query?: query_type, prefix?: string): string;
export declare const _str__query: typeof _query_str;
export declare type query_type = string | Record<string, string | number | boolean | string[] | number[] | boolean[] | (string | number)[] | (string | boolean)[] | (boolean | number)[] | (string | number | boolean)[]>;
