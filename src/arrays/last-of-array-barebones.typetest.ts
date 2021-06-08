import { Equal, Expect } from "@type-challenges/utils";
import { Last } from "./last-of-array-barebones";

export {};

type TestCases = [
    Expect<Equal<
        Last<[3, 2, 1]>,
        1
    >>,
    Expect<Equal<
        Last<[() => 123, { a: string }]>,
        { a: string }
    >>,
    Expect<Equal<
        Last<[]>,
        never
    >>,
    Expect<Equal<
        Last<[undefined]>,
        undefined
    >>,
];
