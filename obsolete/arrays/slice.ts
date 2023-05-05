// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/216-extreme-slice/README.md

// Note: Last known to work on TS 4.3.2
// https://github.com/type-challenges/type-challenges/issues/1757#issuecomment-1238929715

type SliceImpl<
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
                ? SliceImpl<Tail, Start, End, 1, Itr, Res>
                : SliceImpl<Tail, Start, End, 0, [1, ...Itr], Res>
            : Itr["length"] extends Start
                ? SliceImpl<Arr, Start, End, 1, Itr, Res>
                : SliceImpl<Tail, Start, End, 0, [1, ...Itr], Res>
        ;

        1:
        SliceImpl<Tail, Start, End, 1, [1, ...Itr], [...Res, Head]>
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

export type Slice<Arr extends any[], Start extends number = 0, End extends number = never> =
    SliceImpl<Arr, Start, End>
;

/*
Alternative implementation for better readability
export type Slice<
    Arr extends any[],
    Start extends number = 0,
    End extends number = never,

    // Jump
    // 0: bootstrap;
    //              goto 1 if `Start` < 0
    //              goto 2 if `Start` >= 0
    // 1: low bound; skip value; (precondition: `Start` < 0)
    //              goto 3 if `Tail.length` === -`Start`
    // 2: low bound; skip value; (precondition: `Start` >= 0)
    //              goto 3 if `Itr.length` === `Start`
    // 3: in bound; take value
    // 4: pre out bound; take value then return `Res`
    // 5: out bound; return `Res`
    // Jump check:
    //              goto 4 if `Tail.length` === -`End` && `End` < 0
    //              goto 5 if `Itr.length` === `End` && `End` >= 0
    Jump extends 0 | 1 | 2 | 3 | 4 | 5 = 0,
    Itr extends 1[] = [],
    Res extends any[] = []
> = Arr extends [infer Head, ...infer Tail]
    ? {
        0:
        `${Start}` extends `-${infer _Start}`
            ? Slice<Tail, Start, End, 1, Itr, Res>
            : Slice<Arr, Start, End, 2, Itr, Res>
        ;

        1:
        `${Start}` extends `-${infer _Start}`
            ? `${Tail["length"]}` extends _Start
                ? Slice<Tail, Start, End, 3, Itr, Res>
                : Slice<Tail, Start, End, 1, [1, ...Itr], Res>
            : never
        ;

        2:
        Itr["length"] extends Start
            ? Slice<Arr, Start, End, 3, Itr, Res>
            : Slice<Tail, Start, End, 2, [1, ...Itr], Res>
        ;

        3:
        Slice<Tail, Start, End, 3, [1, ...Itr], [...Res, Head]>
        ;

        4:
        [...Res, Head]
        ;

        5:
        Res
        ;
    }[
        `${End}` extends `-${infer _End}`
            ? `${Tail["length"]}` extends _End
                ? 4
                : Jump
            : Itr["length"] extends End
                ? 5
                : Jump
    ]
    : Res
;
*/
