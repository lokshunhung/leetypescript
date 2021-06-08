// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/89-hard-required-keys/README.md

export type RequiredKeys<T> =
    {
        [K in keyof T]-?:
            {} extends { [_ in K]: T[K] }
                ? never
                : K
        ;
    }[keyof T]
;
