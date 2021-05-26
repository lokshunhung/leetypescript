// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/106-medium-trimleft/README.md

export type TrimLeft<T extends string> =
    T extends `${" " | "\t" | "\n"}${infer Tail}`
        ? TrimLeft<Tail>
        : T
;
