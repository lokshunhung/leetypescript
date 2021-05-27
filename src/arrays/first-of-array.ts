export type First<T extends any[]> =
    T extends [infer Head, ...any[]]
        ? Head
        : T extends [...infer Init, infer Last]
            ? Init extends [...any[], any]
                ? First<Init>
                : First<Init> | Last
            : T[number]
;
