import { Equal, Expect, NotEqual } from "@type-challenges/utils";

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

type TestCases = [
    Expect<Equal<
        FindDuplicatedElements<["a", "b", "c"]>,
        []
    >>,

    Expect<Equal<
        FindDuplicatedElements<["a", "b", "c", "b", "a", "d"]>,
        ["b", "a"]
    >>,

    Expect<NotEqual<
        FindDuplicatedElements<["a", "b", "c", "b", "a", "d"]>,
        ["a", "b"]
    >>,

    Expect<Equal<
        FindDuplicatedElements<[
            ...["1", "2", "3", "4", "5"],
            ...["2", "4", "6", "8", "10"],
        ]>,
        ["2", "4"]
    >>,
];
