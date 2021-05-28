/**
 * Stringify a digit array to a string containing numeric.
 */
export type Stringify<T extends any[], O extends string = ""> =
    T extends [infer Head, ...infer Tail]
        ? Head extends number
            ? Stringify<Tail, `${O}${Head}`>
            : never
        : O
;
