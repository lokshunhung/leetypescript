import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { PowerSet } from "./powerset";

export {};

type TestPowerSet = [
    Expect<Equal<
        PowerSet<[]>,
        [[]]
    >>,

    Expect<Equal<
        PowerSet<[1]>,
        [[], [1]]
    >>,

    Expect<NotEqual<
        PowerSet<[1, 2]>,
        [[], [1]]
    >>,

    Expect<Equal<
        PowerSet<[1, 2]>,
        [[], [1], [2], [1, 2]]
    >>,

    Expect<Equal<
        PowerSet<[1, 2, 3]>,
        [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
    >>,
];
