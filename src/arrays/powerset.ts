type PowerSetImpl<Arr extends any[], Result extends any[][] = [[]]> =
    Arr extends [infer Head, ...infer Rest]
        ? { [K in keyof Result]: [...Result[K], Head] } extends infer RR
            ? RR extends any[]
                ? PowerSetImpl<Rest, [...Result, ...RR]>
                : never
            : never
        : Result
;

export type PowerSet<Arr extends any[]> =
    PowerSetImpl<Arr>
;
