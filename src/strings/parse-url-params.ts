type ParseURLParamsImpl<T extends string, Store extends string[] = []> =
    T extends `${string}{${infer Tail}`
        ? Tail extends `${infer Param}}${infer Rest}`
            ? ParseURLParamsImpl<Rest, [...Store, Param]>
            : unknown
        : Store
;

/**
 * Returns query params string array. Preserves param position.
 */
export type ParseURLParams<T extends string> =
    ParseURLParamsImpl<T>
;

/**
 * Returns object interface with query params name as keys.
 */
export type URLParamsRecord<T extends string> =
    Record<ParseURLParams<T>[number], string>
;
