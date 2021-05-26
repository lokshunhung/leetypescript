// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/43-easy-exclude/README.md

export type MyExclude<T, U> =
    T extends U
        ? never
        : T
;
