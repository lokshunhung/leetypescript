// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/7-easy-readonly/README.md

export type MyReadonly<T> =
    {
        +readonly [K in keyof T]: T[K];
    }
;
