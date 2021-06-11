// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/90-hard-optional-keys/README.md

export type GetOptionalKeys<T> =
    {
        [K in keyof T]-?:
            {} extends { [_ in K]: T[K] }
                ? K
                : never
        ;
    }[keyof T]
;

/*
Alternative implementation
export type GetOptionalKeys<T> =
    keyof T extends infer K // declare `K`
        ? K extends keyof T // loop over each element of `K` by distributing `K` (https://www.typescriptlang.org/docs/handbook/advanced-types.html#distributive-conditional-types)
            ? Pick<T, K> extends { [_ in K]: T[K] }
                ? never
                : K
            : never
        : never
;
*/
