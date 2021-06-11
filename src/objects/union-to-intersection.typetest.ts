import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { UnionToIntersection } from "./union-to-intersection";

export {};

// Step 1 - repackage each element of a union type to a function taking it as the argument type (i.e. `A | B` -> `((_: A) => void) | ((_: B) => void)`)
// type distribution only works when LHS of `extends` clause is bare identifier (i.e. `T extends ...` but not `[T] extends ...`)
// see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
type RepackageUnionAsFunctions<U> =
    U extends any
        ? (_: U) => void
        : any
;

type TestCases_RepackageUnionAsFunctions = [
    Expect<Equal<
        RepackageUnionAsFunctions<string | number>,
        | ((_: string) => void)
        | ((_: number) => void)
    >>,
    Expect<Equal<
        RepackageUnionAsFunctions<{ a: 1 } | { b: 2 } | { a: 1; b: 2 } | { c: 3 }>,
        | ((_: { a: 1 }) => void)
        | ((_: { b: 2 }) => void)
        | ((_: { a: 1; b: 2 }) => void)
        | ((_: { c: 3 }) => void)
    >>,
];

// Step 2 - inferring function argument types (in contravariant position) as intersection
// see: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types
type GetContravariantFuncArg<F> =
    [F] extends [(_: infer A) => void] // note: cannot use `F extends ...` here, otherwise the type gets distributed (https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types) and becomes a union
        ? A
        : never
;

type TestCases_GetContravariantFuncArg = [
    Expect<Equal<
        GetContravariantFuncArg<
            | ((_: string) => void)
            | ((_: number) => void)
        >,
        never
    >>,
    Expect<Equal<
        GetContravariantFuncArg< // should be intersection
            | ((_: 1 | 2 | 3 | 4) => void)
            | ((_: 2 | 4 | 6 | 8) => void)
        >,
        2 | 4
    >>,
    Expect<Equal<
        GetContravariantFuncArg< // should be non-flattened intersection
            | ((_: { a: 1; c: 3 }) => void)
            | ((_: { a: 1; b: 2 }) => void)
        >,
        { a: 1; c: 3 } & { a: 1; b: 2 }
    >>,

    Expect<NotEqual<
        GetContravariantFuncArg< // should not be union
            | ((_: 1 | 2 | 3 | 4) => void)
            | ((_: 2 | 4 | 6 | 8) => void)
        >,
        1 | 2 | 3 | 4 | 6 | 8
    >>,
    Expect<NotEqual< // should not be union
        GetContravariantFuncArg<
            | ((_: { a: 1; c: 3 }) => void)
            | ((_: { a: 1; b: 2 }) => void)
        >,
        { a: 1; c: 3 } | { a: 1; b: 2 }
    >>,
    Expect<NotEqual< // should not be flattened
        GetContravariantFuncArg<
            | ((_: { a: 1; c: 3 }) => void)
            | ((_: { a: 1; b: 2 }) => void)
        >,
        { a: 1 }
    >>,
];

// Step 3 - combining the above (./union-to-intersection.ts)
type TestCases_UnionToIntersection = [
    Expect<Equal<
        UnionToIntersection<string | number>,
        never
    >>,
    Expect<Equal<
        UnionToIntersection<
            | { a: 1; c: 3 }
            | { a: 1; b: 2 }
        >,
        { a: 1; c: 3 } & { a: 1; b: 2 }
    >>,
    Expect<Equal<
        UnionToIntersection<
            | { foo: string; bar: "bar" }
            | { foo: "foo"; bar: string }
        >,
        { foo: string; bar: "bar" } & { foo: "foo"; bar: string }
    >>,

    Expect<NotEqual<
        UnionToIntersection<
            | { a: 1; c: 3 }
            | { a: 1; b: 2 }
        >,
        { a: 1 }
    >>,
    Expect<NotEqual<
        UnionToIntersection<
            | { a: 1; c: 3 }
            | { a: 1; b: 2 }
        >,
        { a: 1; b: 2; c: 3 }
    >>,
    Expect<NotEqual<
        UnionToIntersection<
            | { foo: string; bar: "bar" }
            | { foo: "foo"; bar: string }
        >,
        { foo: "foo"; bar: "bar" }
    >>,
    Expect<NotEqual<
        UnionToIntersection<
            | { foo: string; bar: "bar" }
            | { foo: "foo"; bar: string }
        >,
        { foo: string; bar: string }
    >>,
];

// Step 4 (optional) - flattening the result type
type FlattenedUnionToIntersection<U> =
    UnionToIntersection<U> extends infer R
        ? { [K in keyof R]: R[K] }
        : never
;

type TestCases_FlattenedUnionToIntersection = [
    Expect<Equal<
        FlattenedUnionToIntersection<
            | { a: 1; c: 3 }
            | { a: 1; b: 2 }
        >,
        { a: 1; b: 2; c: 3 }
    >>,
    Expect<Equal<
        FlattenedUnionToIntersection<
            | { foo: string; bar: "bar" }
            | { foo: "foo"; bar: string }
        >,
        { foo: "foo"; bar: "bar" }
    >>,
];
