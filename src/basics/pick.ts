// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/4-easy-pick/README.md

export type MyPick<T, K extends keyof T> =
    {
        [Key in K]: T[Key];
    }
;
