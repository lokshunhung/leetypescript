import { Equal, Expect } from "@type-challenges/utils";
import { Push } from "./push";

export {};

type TestCases = [
    Expect<Equal<
        Push<[], 1>,
        [1]
    >>,
    Expect<Equal<
        Push<[1, 2], "3">,
        [1, 2, "3"]
    >>,
    Expect<Equal<
        Push<["1", 2, "3"], boolean>,
        ["1", 2, "3", boolean]
    >>,
];
