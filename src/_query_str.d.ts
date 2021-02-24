export declare function _query_str(query?: query_T, prefix?: string): string;
export { _query_str as _str__query };
export declare type query_T = string | Record</*@formatter:off*/ string, string | number | boolean | string[] | number[] | boolean[] | (string | number)[] | (string | boolean)[] | (boolean | number)[] | (string | number | boolean)[]>;
export declare type query_type = query_T;
