// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/5-extreme-readonly-keys/README.md

export type GetReadonlyKeys<T> =
    {
        [K in keyof T]-?:
            (<U>() => U extends { [KK in K]: T[KK] } ? 2 : 1) extends
                (<U>() => U extends { readonly [KK in K]: T[KK] } ? 2 : 1)
                    ? K
                    : never
    }[keyof T]
;
