import { Equal, Expect } from "@type-challenges/utils";
import { Parse } from "./parse";

export {};

type TestCases = [
    Expect<Equal<
        Parse<"">,
        never
    >>,
    Expect<Equal<
        Parse<"1">,
        [1]
    >>,
    Expect<Equal<
        Parse<"12">,
        [1, 2]
    >>,
    Expect<Equal<
        Parse<"456789">,
        [4, 5, 6, 7, 8, 9]
    >>,
];
