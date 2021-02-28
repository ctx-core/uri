export declare function _query_str(query?: query_T, prefix?: string): string;
export { _query_str as _str__query };
export declare type query_value_T = string | number | boolean | string[] | number[] | boolean[] | (string | number)[] | (string | boolean)[] | (number | boolean)[] | (string | number | boolean)[];
export declare type query_T = string | {
    [key: string]: query_value_T;
} | Record<string, query_value_T>;
export declare type query_type = query_T;
