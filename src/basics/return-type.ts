// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/2-medium-return-type/README.md

export type MyReturnType<T extends Function> =
    T extends ((..._: any[]) => infer R)
        ? R
        : never
;
