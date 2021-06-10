// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/527-medium-append-to-object/README.md

// Also: `type AppendToObject<T, U extends string | number | symbol, V> = { [K in (keyof T) | U]: K extends U ? V : K extends keyof T ? T[K] : never };`
export type AppendToObject<T, U extends string | number | symbol, V> =
    T & Record<U, V> extends infer R
        ? { [K in keyof R]: R[K] } // flatten intersection
        : never
;
