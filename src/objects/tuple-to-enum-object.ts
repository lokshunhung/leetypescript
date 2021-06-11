type EnumImpl<
    T extends readonly string[],
    N extends boolean = false,
    R = {}
> =
    N extends true
        ? T extends readonly [...infer Init, infer Last]
            ? Init extends string[]
                ? EnumImpl<
                    Init,
                    true,
                    R & Record<Capitalize<Last & string>, Init["length"]>
                >
                : never
            : { readonly [K in keyof R]: R[K] } // flatten
        // do not use numeric literal
        : { readonly [K in T[number] as Capitalize<K>]: K }
;

export type Enum<T extends readonly string[], N extends boolean = false> =
    EnumImpl<T, N>
;
