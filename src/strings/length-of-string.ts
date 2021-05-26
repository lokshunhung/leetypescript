type LengthImpl<T extends string, I extends any[] = []> =
    T extends `${infer _}${infer Tail}`
        ? LengthImpl<Tail, [any, ...I]>
        : I["length"]
;

export type Length<T extends string> =
    LengthImpl<T>
;
