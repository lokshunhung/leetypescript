// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/20-medium-promise-all/README.md

type PromiseOr<E> = E | Promise<E>

type AwaitAll<T extends any[]> =
    T extends [infer Head, ...infer Tail]
        ? Head extends Promise<infer R>
            ? [R, ...AwaitAll<Tail>]
            : [Head, ...AwaitAll<Tail>]
        : T extends [...infer Init, infer Last]
            ? Last extends Promise<infer R>
                ? [...AwaitAll<Init>, R]
                : [...AwaitAll<Init>, Last]
            : T extends []
                ? T
                : T extends Array<PromiseOr<infer E>>
                    ? Array<E>
                    : T
;

// Note: Using variadic tuple types in function parameters is only available for TS4.0+, see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
export declare function PromiseAllStrict<
    T extends any[]
>(values: readonly [...T]):
    Promise<AwaitAll<T>>
;
