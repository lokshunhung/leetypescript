// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/459-medium-flatten/README.md

export type Flatten<T extends any[]> =
    T extends [infer Head, ...infer Tail]
        ? Head extends any[]
            ? [...Flatten<Head>, ...Flatten<Tail>]
            : [Head, ...Flatten<Tail>]
        : T
;
