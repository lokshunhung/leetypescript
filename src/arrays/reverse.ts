export type Reverse<T extends any[], S extends any[] = []> =
    T extends [infer Head, ...infer Tail]
        ? Tail extends []
            ? [Head, ...S]
            : Reverse<Tail, [Head, ...S]>
        : T extends [...infer Init, infer Last]
            ? [Last, ...Reverse<Init>, ...S]
            : [...T, ...S]
;
