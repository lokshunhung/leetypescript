// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/189-easy-awaited/README.md

export type Awaited<T> =
    T extends Promise<infer U>
        ? Awaited<U>
        : T
;
