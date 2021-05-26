// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/14-easy-first/README.md

export type First<T extends any[]> =
    T extends [infer Head, ...any[]]
        ? Head
        : never
;
