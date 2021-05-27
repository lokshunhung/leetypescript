export type Last<T extends any[]> =
    T extends [infer Head, ...infer Tail]
        ? Tail extends []
            ? Head
            : Last<Tail>
        : T extends [...infer Init, infer Last]
            ? Last
            : T[number]
;
