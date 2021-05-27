// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/10-medium-tuple-to-union/README.md

export type TupleToUnion<T extends any[]> =
    T[number]
;
