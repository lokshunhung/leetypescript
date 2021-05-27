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
        number
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
        number
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
        Last<[boolean, symbol, number | string]>,
        number | string
    >>,
    Expect<NotEqual<
        Last<[boolean, symbol, number | string]>,
        string
    >>,
    Expect<Equal<
        Last<[boolean, string, ...Array<number | string>]>,
        number | string
    >>,
    Expect<NotEqual<
        Last<[boolean, string, ...Array<number | string>]>,
        string
    >>,
];
