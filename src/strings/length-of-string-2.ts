// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/651-hard-length-of-string-2/README.md

export type Length2<T extends string, I extends 1[] = []> =
    T extends `${infer H1}${infer H2}${infer H3}${infer H4}${infer H5}${infer H6}${infer H7}${infer H8}${infer H9}${infer H10}${infer T}`
        ? Length2<T, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ...I]>
        : T extends `${infer H}${infer T}`
            ? Length2<T, [1, ...I]>
            : I["length"]
;
