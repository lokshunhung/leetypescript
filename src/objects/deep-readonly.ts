// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/9-medium-deep-readonly/README.md

export type DeepReadonly<T> =
    T extends string | number | boolean | symbol | bigint | null | undefined | Function
        ? T
        : {
            +readonly [K in keyof T]: DeepReadonly<T[K]>;
        }
;
