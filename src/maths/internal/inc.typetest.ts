import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { Inc } from "./inc";

export {};

type TestCases = [
    Expect<Equal<
        Inc<[]>,
        never
    >>,
    Expect<Equal<
        Inc<[0]>,
        [1]
    >>,
    Expect<Equal<
        Inc<[9]>,
        [1, 0]
    >>,
    Expect<Equal<
        Inc<[1, 9]>,
        [2, 0]
    >>,
    Expect<Equal<
        Inc<[9, 9]>,
        [1, 0, 0]
    >>,
    Expect<Equal<
        Inc<[2, 0, 9]>,
        [2, 1, 0]
    >>,

    Expect<NotEqual<
        Inc<[1, 2, 3]>,
        [1, 2, 3]
    >>,
];
