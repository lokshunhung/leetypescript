type Slice<
    Arr extends any[],
    Start extends number = 0,
    End extends number = never,

    // Jump
    // 0: low bound; skip value;
    //               goto 1 if `Itr.length` === `Start` && `Start` >= 0
    //               goto 1 if `Tail.length` === -`Start` && `Start` < 0
    // 1: in bound; take value;
    // 2: pre out bound; take value then return `Res`
    // 3: out bound; return `Res`
    // Jump check:
    //              goto 2 if `Tail.length` === -`End` && `End` < 0
    //              goto 3 if `Itr.length` === `End` && `End` >= 0
    Jump extends 0 | 1 | 2 | 3 = 0,
    Itr extends 1[] = [],
    Res extends any[] = []
> = Arr extends [infer Head, ...infer Tail]
    ? {
        0:
        `${Start}` extends `-${infer _Start}`
            ? `${Tail["length"]}` extends _Start
                ? Slice<Tail, Start, End, 1, Itr, Res>
                : Slice<Tail, Start, End, 0, [1, ...Itr], Res>
            : Itr["length"] extends Start
                ? Slice<Arr, Start, End, 1, Itr, Res>
                : Slice<Tail, Start, End, 0, [1, ...Itr], Res>
        ;

        1:
        Slice<Tail, Start, End, 1, [1, ...Itr], [...Res, Head]>
        ;

        2:
        [...Res, Head]
        ;

        3:
        Res
        ;
    }[
        `${End}` extends `-${infer _End}`
            ? `${Tail["length"]}` extends _End
                ? 2
                : Jump
            : Itr["length"] extends End
                ? 3
                : Jump
    ]
    : Res
;

import { Equal, Expect } from "@type-challenges/utils";

type Arr = [1, 2, 3, 4, 5];

type _ = Slice<Arr, -3, -1>

type TestCases = [
    // basic
    Expect<Equal<
        Slice<Arr, 0, 1>,
        [1]
    >>,
    Expect<Equal<
        Slice<Arr, 0, 0>,
        []
    >>,
    Expect<Equal<
        Slice<Arr, 2, 4>,
        [3, 4]
    >>,

    // optional args
    Expect<Equal<
        Slice<[]>,
        []
    >>,
    Expect<Equal<
        Slice<Arr>,
        Arr
    >>,
    Expect<Equal<
        Slice<Arr, 0>,
        Arr
    >>,
    Expect<Equal<
        Slice<Arr, 2>,
        [3, 4, 5]
    >>,

    // negative index
    Expect<Equal<
        Slice<Arr, 0, -1>,
        [1, 2, 3, 4]
    >>,
    Expect<Equal<
        Slice<Arr, -3, -1>,
        [3, 4]
    >>,

    // invalid
    Expect<Equal<
        Slice<Arr, 10>,
        []
    >>,
    Expect<Equal<
        Slice<Arr, 1, 0>,
        []
    >>,
    Expect<Equal<
        Slice<Arr, 10, 20>,
        []
    >>,
];
