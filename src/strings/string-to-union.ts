// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/531-medium-string-to-union/README.md

export type StringToUnion<T extends string, R = never> =
    T extends `${infer H}${infer T}`
        ? StringToUnion<T, R | H>
        : R
;
