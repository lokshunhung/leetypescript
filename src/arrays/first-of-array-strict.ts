type FirstStrictImpl<T extends any[]> =
    T extends [infer Head, ...any[]]
        ? Head
        : T extends [...infer Init, infer Last]
            ? Init extends [...any[], any]
                ? FirstStrictImpl<Init>
                : FirstStrictImpl<Init> | Last
            : T[number]
;

export type FirstStrict<T extends any[]> =
    T extends []
        ? never
        : T extends [any, ...any[]]
            ? FirstStrictImpl<T>
            : T extends [...any[], any]
                ? FirstStrictImpl<T>
                : T[number] | undefined
;
