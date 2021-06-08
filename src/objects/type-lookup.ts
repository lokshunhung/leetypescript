// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/62-medium-type-lookup/README.md

// Note: Use conditional check with `U extends { type: T }` instead of `U["type"] extends T`
// because distributive conditional types only works when the form is `Type extends ...` (lhs is bare identifier)
// see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
export type LookUp<U extends { type: string }, T extends string> =
    U extends { type: T }
        ? U
        : never
;
