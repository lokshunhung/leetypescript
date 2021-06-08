// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/151-extreme-query-string-parser/README.md

export type ParseQueryString<T extends string, R = {}> =
    T extends ""
        ? R
        : T extends `${infer S}&${infer SR}`
            // Begin merge
            ? [ParseQueryString<S>, ParseQueryString<SR>] extends [infer R1, infer R2]
                ? {
                    [K in keyof R1 | keyof R2]:
                        K extends keyof R1 & keyof R2
                            ? R2[K] extends infer R2K
                                ? R2K extends Array<infer E>
                                    ? R1[K] extends E ? R2K : [R1[K], ...R2K]
                                    : R1[K] extends R2K ? R2K : [R1[K], R2K]
                                : never
                            : K extends keyof R1
                                ? R1[K]
                                : K extends keyof R2
                                    ? R2[K]
                                    : never
                    ;
                }
                : never
            // End merge

            // Begin base case
            : T extends `${infer K}=${infer V}`
                ? Record<K, V>
                : Record<T, true>
            // End base case
;
