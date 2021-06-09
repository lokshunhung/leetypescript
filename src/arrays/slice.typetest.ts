type Slice<
    Arr extends any[],
    Start extends number = 0,
    End extends number = never,

    // Jump
    // 0: low bound; skip value;
    //               goto 1 if `Itr.length` === `Start` && `End` > 0
    //               goto 2 if `Itr.length` === `Start` && `End` < 0
    // 1: in bound; take value; goto 3 if `Itr.length` === `End`
    // 2: in bound; take value; goto 3 if `Tail.length` === -`End`
    // 3: out bound; return `Res`
    Jump extends 0 | 1 | 2 | 3 = 0,
    Itr extends 1[] = [],
    Res extends any[] = []
> = Arr extends [infer Head, ...infer Tail]
    ? {
        0:
        Itr["length"] extends Start
            ? `${End}` extends `-${number}`
                ? Slice<Arr, Start, End, 2, Itr, Res>
                : Slice<Arr, Start, End, 1, Itr, Res>
            : Slice<Tail, Start, End, 0, [1, ...Itr], Res>
        ;

        1:
        Itr["length"] extends End
            ? Slice<Arr, Start, End, 3, Itr, Res>
            : Slice<Tail, Start, End, 1, [1, ...Itr], [...Res, Head]>
        ;

        2:
        `${End}` extends `-${infer _End}`
            ? `${Tail["length"]}` extends _End
                ? Slice<Arr, Start, End, 3, Itr, [...Res, Head]>
                : Slice<Tail, Start, End, 2, [1, ...Itr], [...Res, Head]>
            : never
        ;

        3:
        Res
        ;
    }[Jump]
    : Res
;

import { Equal, Expect } from "@type-challenges/utils";

type Arr = [1, 2, 3, 4, 5];

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
