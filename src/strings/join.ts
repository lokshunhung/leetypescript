// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/847-hard-string-join/README.md

type Join<
    Del extends string,
    Arr extends string[],
    Res extends string = ""
> =
    Arr extends [infer Head, ...infer Tail]
        ? Head extends string
            ? Tail extends string[]
                ? Join<Del, Tail, `${Res}${Head}${Tail extends [] ? "" : Del}`>
                : never
            : never
        : Res
;

export declare function join<Del extends string>(delimiter: Del):
    <Arr extends string[]>(...parts: Arr) => Join<Del, Arr>
;
