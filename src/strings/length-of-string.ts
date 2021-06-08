// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/298-medium-length-of-string/README.md

type LengthImpl<T extends string, I extends any[] = []> =
    T extends `${infer _}${infer Tail}`
        ? LengthImpl<Tail, [any, ...I]>
        : I["length"]
;

export type Length<T extends string> =
    LengthImpl<T>
;
