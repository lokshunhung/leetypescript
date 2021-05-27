export type FirstStrict<
    T extends any[],
    U extends 0 | 1 = 0 // U === 1 -> has performed undefined check
> =
    {
        0:
        never
        ;

        1:
        T extends [infer Head, ...any[]]
            ? Head
            : never
        ;

        2:
        T extends [...infer Init, infer Last]
            ? Init extends [...any[], any]
                ? FirstStrict<Init, 1>
                : FirstStrict<Init, 1> | Last
            : never
        ;

        3:
        FirstStrict<T, 1> | undefined
        ;

        4:
        T[number]
        ;
    }[
        T extends [] ? 0 :
        T extends [any, ...any[]] ? 1 :
        T extends [...any[], any] ? 2 :
        U extends 0 ? 3 :
        4
    ]
;
