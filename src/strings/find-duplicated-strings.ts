export type FindDuplicatedElements<T extends string[], I extends string[] = [], D extends string[] = []> =
    T extends [infer Head, ...infer Tail]
        ? Head extends string
            ? Tail extends string[]
                ? Head extends I[number]
                    ? FindDuplicatedElements<Tail, [Head, ...I], [...D, Head]>
                    : FindDuplicatedElements<Tail, [Head, ...I], D>
                : unknown
            : unknown
        : D
;
