// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/106-medium-trimleft/README.md
// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/108-medium-trim/README.md

type Whitespaces = " " | "\t" | "\n";

type TrimOptions = "Left" | "Right" | "Both";

export type Trim<T extends string, O extends TrimOptions = "Both"> =
    {
        "Left":
        T extends `${Whitespaces}${infer Tail}`
            ? Trim<Tail, "Left">
            : T
        ;

        "Right":
        T extends `${infer Head}${Whitespaces}`
            ? Trim<Head, "Right">
            : T
        ;

        "Both":
        Trim<Trim<T, "Left">, "Right">
        ;
    }[O]
;
