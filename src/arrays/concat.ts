// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/533-easy-concat/README.md

export type Concat<T extends any[], U extends any[]> =
    [...T, ...U]
;
