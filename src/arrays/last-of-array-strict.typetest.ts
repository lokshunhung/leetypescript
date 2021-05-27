import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { LastStrict } from "./last-of-array-strict";

export {};

type TestCases = [
    Expect<Equal<
        LastStrict<[]>,
        never
    >>,
    Expect<Equal<
        LastStrict<["1", 2, "3", 4]>,
        4
    >>,
    Expect<Equal<
        LastStrict<string[]>,
        string | undefined
    >>,
    Expect<Equal<
        LastStrict<Array<boolean | number>>,
        boolean | number | undefined
    >>,

    Expect<Equal<
        LastStrict<[boolean, ...number[]]>,
        boolean | number
    >>,
    Expect<Equal<
        LastStrict<[...number[], string]>,
        string
    >>,
    Expect<Equal<
        LastStrict<[boolean, ...number[], string]>,
        string
    >>,

    Expect<Equal<
        LastStrict<[boolean, () => void, ...number[]]>,
        (() => void) | number
    >>,
    Expect<Equal<
        LastStrict<[...number[], () => void, string]>,
        string
    >>,
    Expect<Equal<
        LastStrict<[boolean, () => void, ...number[], () => void, string]>,
        string
    >>,

    Expect<Equal<
        LastStrict<[boolean, number, string | symbol]>,
        string | symbol
    >>,
    Expect<Equal<
        LastStrict<[boolean, number, ...Array<string | symbol>]>,
        number | string | symbol
    >>,

    Expect<NotEqual<
        LastStrict<[boolean, number, ...string[]]>,
        string
    >>,
    Expect<NotEqual<
        LastStrict<[boolean, number, ...Array<string | symbol>]>,
        string | symbol
    >>,
];
