import { Equal, Expect } from "@type-challenges/utils";
import { Reverse } from "./reverse";

export {};

type TestCases = [
    Expect<Equal<
        Reverse<[1, 2, 3]>,
        [3, 2, 1]
    >>,
    Expect<Equal<
        Reverse<["a", 1, "b", 2, "c", 3]>,
        [3, "c", 2, "b", 1, "a"]
    >>,
    Expect<Equal<
        Reverse<[true, string[], () => void]>,
        [() => void, string[], true]
    >>,

    Expect<Equal<
        Reverse<[0, ...string[]]>,
        [...string[], 0]
    >>,
    Expect<Equal<
        Reverse<[...string[], 1]>,
        [1, ...string[]]
    >>,

    Expect<Equal<
        Reverse<[0, 1, ...string[]]>,
        [...string[], 1, 0]
    >>,
    Expect<Equal<
        Reverse<[...string[], 2, 3]>,
        [3, 2, ...string[]]
    >>,
    Expect<Equal<
        Reverse<[0, ...string[], 1]>,
        [1, ...string[], 0]
    >>,

    Expect<Equal<
        Reverse<[0, 1, ...string[], 2, 3]>,
        [3, 2, ...string[], 1, 0]
    >>,
];
