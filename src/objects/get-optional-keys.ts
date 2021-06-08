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
