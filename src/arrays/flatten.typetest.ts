import { Equal, Expect } from "@type-challenges/utils";
import { Flatten } from "./flatten";

export {};

type TestCases = [
    Expect<Equal<
        Flatten<[]>,
        []
    >>,
    Expect<Equal<
        Flatten<[1, 2, 3, 4]>,
        [1, 2, 3, 4]
    >>,
    Expect<Equal<
        Flatten<[1, [2]]>,
        [1, 2]
    >>,
    Expect<Equal<
        Flatten<[1, 2, [3, 4], [[[5]]]]>,
        [1, 2, 3, 4, 5]
    >>,
    Expect<Equal<
        Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
        [{ foo: "bar"; 2: 10 }, "foobar"]
    >>,

    Expect<Equal<
        Flatten<[1, 2, [], [[]], 3]>,
        [1, 2, 3]
    >>,
    Expect<Equal<
        Flatten<[[1], [], [[2]], 3]>,
        [1, 2, 3]
    >>,
];
