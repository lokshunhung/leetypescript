// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/108-medium-trim/README.md

type Whitespaces = " " | "\t" | "\n";

export type Trim<T extends string> =
    T extends `${Whitespaces}${infer Tail}`
        ? Trim<Tail>
        : T extends `${infer Head}${Whitespaces}`
            ? Trim<Head>
            : T
;
