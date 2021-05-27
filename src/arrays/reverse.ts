type ReverseImpl<T extends any[], S extends any[] = []> =
    T extends [infer Head, ...infer Tail]
        ? Tail extends []
            ? [Head, ...S]
            : ReverseImpl<Tail, [Head, ...S]>
        : T extends [...infer Init, infer Last]
            ? [Last, ...ReverseImpl<Init>, ...S]
            : [...T, ...S]
;

export type Reverse<T extends any[]> =
    ReverseImpl<T>
;
