type ParseQueryParamsImpl<T extends string, Store extends string[] = []> =
    T extends `${string}{${infer Tail}`
        ? Tail extends `${infer Param}}${infer Rest}`
            ? ParseQueryParamsImpl<Rest, [...Store, Param]>
            : unknown
        : Store
;

/**
 * Returns query params string array. Preserves param position.
 */
export type ParseQueryParams<T extends string> =
    ParseQueryParamsImpl<T>
;

/**
 * Returns object interface with query params name as keys.
 */
export type URLQueryParams<T extends string> =
    Record<ParseQueryParams<T>[number], string>
;
