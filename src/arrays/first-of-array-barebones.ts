// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/14-easy-first/README.md

export type First<T extends any[]> =
    T extends [infer Head, ...any[]]
        ? Head
        : never
;
