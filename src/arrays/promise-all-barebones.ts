// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/20-medium-promise-all/README.md

export declare function PromiseAll<
    T extends any[]
>(values: readonly [...T]):
    Promise<{
        [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
    }>
;
