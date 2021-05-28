import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { Subtract } from "./subtract";

export {};

type TestCases = [
    Expect<Equal<
        Subtract<[1], [1]>,
        [0]
    >>,
    Expect<Equal<
        Subtract<[2], [0]>,
        [2]
    >>,
    Expect<Equal<
        Subtract<[1, 0], [7]>,
        [3]
    >>,
    Expect<Equal<
        Subtract<[2, 4], [2]>,
        [2, 2]
    >>,
    Expect<Equal<
        Subtract<[3, 6], [1, 2]>,
        [2, 4]
    >>,
    Expect<Equal<
        Subtract<[1, 0, 3], [4, 2]>,
        [6, 1]
    >>,

    Expect<NotEqual<
        Subtract<[2], [1]>,
        [0]
    >>,
];
