import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { First } from "./first-of-array";

export {};

type TestCases = [
    Expect<Equal<
        First<[]>,
        never
    >>,
    Expect<Equal<
        First<[3, 2, 1]>,
        3
    >>,
    Expect<Equal<
        First<string[]>,
        string
    >>,

    Expect<Equal<
        First<[boolean, ...number[]]>,
        boolean
    >>,
    Expect<Equal<
        First<[...number[], string]>,
        number | string
    >>,
    Expect<Equal<
        First<[boolean, ...number[], string]>,
        boolean
    >>,

    Expect<Equal<
        First<[boolean, () => void, ...number[]]>,
        boolean
    >>,
    Expect<Equal<
        First<[...number[], () => void, string]>,
        number | (() => void)
    >>,
    Expect<Equal<
        First<[boolean, () => void, ...number[], () => void, string]>,
        boolean
    >>,

    Expect<Equal<
        First<[string | symbol, number, boolean]>,
        string | symbol
    >>,
    Expect<Equal<
        First<[...Array<string | symbol>, number, boolean]>,
        number | string | symbol
    >>,

    Expect<NotEqual<
        First<[string | symbol, number, boolean]>,
        string
    >>,
    Expect<NotEqual<
        First<[...Array<string | symbol>, number, boolean]>,
        string | symbol
    >>,
];
