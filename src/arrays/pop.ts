// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/16-medium-pop/README.md

export type Pop<T extends any[]> =
    T extends [...infer Init, any]
        ? Init
        : never
;
