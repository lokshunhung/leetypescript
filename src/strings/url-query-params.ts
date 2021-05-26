/**
 * Returns query params string array. Preserves param position.
 */
export type ParseQueryParams<T extends string, Store extends string[] = []> =
    T extends `${string}{${infer Tail}`
        ? Tail extends `${infer Param}}${infer Rest}`
            ? ParseQueryParams<Rest, [...Store, Param]>
            : unknown
        : Store
;

/**
 * Returns object interface with query params name as keys.
 */
export type URLQueryParams<T extends string> =
    Record<ParseQueryParams<T>[number], string>
;
