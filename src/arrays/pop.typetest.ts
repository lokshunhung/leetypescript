import { Equal, Expect } from "@type-challenges/utils";
import { Pop } from "./pop";

export {};

type TestCases = [
    Expect<Equal<
        Pop<[3, 2, 1]>,
        [3, 2]
    >>,
    Expect<Equal<
        Pop<["a", "b", "c", "d"]>,
        ["a", "b", "c"]
    >>,
    Expect<Equal<
        Pop<[undefined]>,
        []
    >>,
    Expect<Equal<
        Pop<[]>,
        never
    >>,
];
