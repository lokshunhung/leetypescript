type FindDuplicatedElementsImpl<T extends string[], I extends string[] = [], D extends string[] = []> =
    T extends [infer Head, ...infer Tail]
        ? Head extends string
            ? Tail extends string[]
                ? Head extends I[number]
                    ? FindDuplicatedElementsImpl<Tail, [Head, ...I], [...D, Head]>
                    : FindDuplicatedElementsImpl<Tail, [Head, ...I], D>
                : unknown
            : unknown
        : D
;

export type FindDuplicatedElements<T extends string[]> =
    FindDuplicatedElementsImpl<T>
;
