// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/11-easy-tuple-to-object/README.md

export type TupleToObject<T extends any[]> =
    {
        [K in T[number]]: K;
    }
;
