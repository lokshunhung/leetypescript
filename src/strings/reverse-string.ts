export type ReverseString<T extends string, R extends string = ""> =
    T extends ""
        ? R
        : T extends `${infer Head}${infer Tail}`
            ? ReverseString<Tail, `${Head}${R}`>
            : never
;
