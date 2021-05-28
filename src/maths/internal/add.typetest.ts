import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { Add } from "./add";

type TestCase = [
    Expect<Equal<
        Add<[1, 3], []>,
        [1, 3]
    >>,
    Expect<Equal<
        Add<[1, 4], [0]>,
        [1, 4]
    >>,
    Expect<Equal<
        Add<[1], [1]>,
        [2]
    >>,
    Expect<Equal<
        Add<[1, 1], [1]>,
        [1, 2]
    >>,
    Expect<Equal<
        Add<[1, 2], [9]>,
        [2, 1]
    >>,
    Expect<Equal<
        Add<[2, 4], [3, 1]>,
        [5, 5]
    >>,
    Expect<Equal<
        Add<[6, 1], [3, 9]>,
        [1, 0, 0]
    >>,

    // TODO: Find out the threshold TypeScript dies when recursion is too deep
    // This should work
    Expect<Equal<
        Add<[6, 1], [4, 2]>,
        [1, 0, 3]
    >>,

    Expect<NotEqual<
        Add<[1], [1]>,
        [3]
    >>,
];
