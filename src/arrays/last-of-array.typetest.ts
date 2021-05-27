import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { Last } from "./last-of-array";

export {};

type TestCases = [
    Expect<Equal<
        Last<[]>,
        never
    >>,
    Expect<Equal<
        Last<["1", 2, "3", 4]>,
        4
    >>,
    Expect<Equal<
        Last<string[]>,
        string
    >>,

    Expect<Equal<
        Last<[boolean, ...number[]]>,
        boolean | number
    >>,
    Expect<Equal<
        Last<[...number[], string]>,
        string
    >>,
    Expect<Equal<
        Last<[boolean, ...number[], string]>,
        string
    >>,

    Expect<Equal<
        Last<[boolean, () => void, ...number[]]>,
        (() => void) | number
    >>,
    Expect<Equal<
        Last<[...number[], () => void, string]>,
        string
    >>,
    Expect<Equal<
        Last<[boolean, () => void, ...number[], () => void, string]>,
        string
    >>,

    Expect<Equal<
        Last<[boolean, number, string | symbol]>,
        string | symbol
    >>,
    Expect<Equal<
        Last<[boolean, number, ...Array<string | symbol>]>,
        number | string | symbol
    >>,

    Expect<NotEqual<
        Last<[boolean, number, ...string[]]>,
        string
    >>,
    Expect<NotEqual<
        Last<[boolean, number, ...Array<string | symbol>]>,
        string | symbol
    >>,
];
