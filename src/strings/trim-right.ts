export type TrimRight<T extends string> =
    T extends `${infer Head}${" " | "\t" | "\n"}`
        ? TrimRight<Head>
        : T
;
