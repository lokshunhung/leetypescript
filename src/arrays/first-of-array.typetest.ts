import { Equal, Expect } from "@type-challenges/utils";
import { First } from "./first-of-array";

export {};

type TestCases = [
    Expect<Equal<
        First<[3, 2, 1]>,
        3
    >>,

    Expect<Equal<
        First<[() => 123, { a: string }]>,
        () => 123
    >>,

    Expect<Equal<
        First<[]>,
        never
    >>,

    Expect<Equal<
        First<[undefined]>,
        undefined
    >>,
];
