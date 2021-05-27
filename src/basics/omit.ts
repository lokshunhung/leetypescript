// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/3-medium-omit/README.md

// Note: Using key remapping in mapped types is only for TS4.1+, see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types
// Also: `type MyOmit<T, K> = { [Key in Exclude<keyof T, K>]: T[Key] };` with the `Exclude` helper
// Also: `type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>` with the `Pick` and `Exclude` helper
export type MyOmit<T, K> =
    {
        [Key in keyof T as Key extends K ? never : Key]: T[Key];
    }
;
