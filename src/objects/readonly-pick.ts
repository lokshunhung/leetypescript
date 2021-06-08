// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/8-medium-readonly-2/README.md

// Note: Using key remapping in mapped types is only for TS4.1+, see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types
// Also: `type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;` with the `Readonly`, `Pick`, `Omit` helper
export type ReadonlyPick<T, K extends keyof T = keyof T> =
    {
        +readonly [Key in keyof T as Key extends K ? Key : never]: T[Key];
    } & {
        [Key in keyof T as Key extends K ? never : Key]: T[Key];
    }
;
