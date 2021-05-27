import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { Concat } from "./concat";

export {};

type TestCases = [
    Expect<Equal<
        Concat<[], []>,
        []
    >>,

    Expect<Equal<
        Concat<[], [1]>,
        [1]
    >>,

    Expect<Equal<
        Concat<[1, 2], [3, 4]>,
        [1, 2, 3, 4]
    >>,

    Expect<Equal<
        Concat<["1", 2, "3"], [false, boolean, "4"]>,
        ["1", 2, "3", false, boolean, "4"]
    >>,

    Expect<Equal<
        Concat<[undefined, null, 0], string[]>,
        [undefined, null, 0, ...string[]]
    >>,

    Expect<NotEqual<
        Concat<[undefined, null, 0], string[]>,
        Array<undefined | null | 0 | string>
    >>,
];
