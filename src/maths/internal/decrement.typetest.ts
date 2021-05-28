import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { Dec } from "./decrement";

export {};

type TestCases = [
    Expect<Equal<
        Dec<[2, 4, 3]>,
        [2, 4, 2]
    >>,
    Expect<Equal<
        Dec<[1, 0, 0]>,
        [9, 9]
    >>,
    Expect<Equal<
        Dec<[2, 0]>,
        [1, 9]
    >>,
    Expect<Equal<
        Dec<[1, 0]>,
        [9]
    >>,
    Expect<Equal<
        Dec<[1]>,
        [0]
    >>,
    Expect<Equal<
        Dec<[0]>,
        never // TODO: handle negative?
    >>,

    Expect<NotEqual<
        Dec<[1, 0, 0]>,
        [0, 9, 9]
    >>,
];
