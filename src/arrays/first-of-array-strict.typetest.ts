import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { FirstStrict } from "./first-of-array-strict";

export {};

type TestCases = [
    Expect<Equal<
        FirstStrict<[]>,
        never
    >>,
    Expect<Equal<
        FirstStrict<[3, 2, 1]>,
        3
    >>,
    Expect<Equal<
        FirstStrict<string[]>,
        string | undefined
    >>,
    Expect<Equal<
        FirstStrict<Array<boolean | number>>,
        boolean | number | undefined
    >>,

    Expect<Equal<
        FirstStrict<[boolean, ...number[]]>,
        boolean
    >>,
    Expect<Equal<
        FirstStrict<[...number[], string]>,
        number | string
    >>,
    Expect<Equal<
        FirstStrict<[boolean, ...number[], string]>,
        boolean
    >>,

    Expect<Equal<
        FirstStrict<[boolean, () => void, ...number[]]>,
        boolean
    >>,
    Expect<Equal<
        FirstStrict<[...number[], () => void, string]>,
        number | (() => void)
    >>,
    Expect<Equal<
        FirstStrict<[boolean, () => void, ...number[], () => void, string]>,
        boolean
    >>,

    Expect<Equal<
        FirstStrict<[string | symbol, number, boolean]>,
        string | symbol
    >>,
    Expect<Equal<
        FirstStrict<[...Array<string | symbol>, number, boolean]>,
        number | string | symbol
    >>,

    Expect<NotEqual<
        FirstStrict<[string | symbol, number, boolean]>,
        string
    >>,
    Expect<NotEqual<
        FirstStrict<[...Array<string | symbol>, number, boolean]>,
        string | symbol
    >>,
];
