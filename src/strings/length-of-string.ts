// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/298-medium-length-of-string/README.md

type LengthImpl<T extends string, I extends 1[] = []> =
    T extends `${string}${infer Tail}`
        ? LengthImpl<Tail, [1, ...I]>
        : I["length"]
;

export type Length<T extends string> =
    LengthImpl<T>
;
