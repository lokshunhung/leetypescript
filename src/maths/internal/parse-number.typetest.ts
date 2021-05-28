import { Equal, Expect } from "@type-challenges/utils";
import { ParseNumber } from "./parse-number";

export {};

type TestCases = [
    Expect<Equal<
        ParseNumber<"">,
        never
    >>,
    Expect<Equal<
        ParseNumber<"1">,
        [1]
    >>,
    Expect<Equal<
        ParseNumber<"12">,
        [1, 2]
    >>,
    Expect<Equal<
        ParseNumber<"456789">,
        [4, 5, 6, 7, 8, 9]
    >>,
];
