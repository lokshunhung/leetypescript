// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/15-medium-last/README.md

export type Last<T extends any[]> =
    T extends [...any[], infer LLast]
        ? LLast
        : never
;
