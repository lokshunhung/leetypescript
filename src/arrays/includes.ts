// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/898-easy-includes/README.md

export type Includes<T extends any[], E> =
    E extends T[number]
        ? true
        : false
;
