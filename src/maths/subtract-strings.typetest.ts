import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { SubtractStrings } from "./subtract-strings";

export {};

type TestCases = [
    Expect<Equal<
        SubtractStrings<"0", "0">,
        "0"
    >>,
    Expect<Equal<
        SubtractStrings<"3", "2">,
        "1"
    >>,
    Expect<Equal<
        SubtractStrings<"46", "34">,
        "12"
    >>,

    Expect<NotEqual<
        SubtractStrings<"11", "1">,
        "1"
    >>,
    Expect<NotEqual<
        SubtractStrings<"50", "12">,
        "41"
    >>,
];
