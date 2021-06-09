// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/270-hard-typed-get/README.md

export type Get<T, K extends string> =
    K extends `${infer Head}.${infer Tail}`
        ? Head extends keyof T
            ? Get<T[Head], Tail>
            : never
        : K extends keyof T
            ? T[K]
            : never
;
