import { Equal, Expect } from "@type-challenges/utils";
import { join } from "./join";

export {};

const noCharsOutput = join("-")();
const oneCharOutput = join("-")("a");
const noDelimiterOutput = join("")("a", "b", "c");

type TestCases_EdgeCases = [
    Expect<Equal<
        typeof noCharsOutput,
        ""
    >>,
    Expect<Equal<
        typeof oneCharOutput,
        "a"
    >>,
    Expect<Equal<
        typeof noDelimiterOutput,
        "abc"
    >>,
];

const hyphenOutput = join("-")("a", "b", "c");
const hashOutput = join("#")("a", "b", "c");
const twoCharOutput = join("-")("a", "b");
const longOutput = join("-")("a", "b", "c", "d", "e", "f", "g", "h");

type TestCases_RegularCases = [
    Expect<Equal<
        typeof twoCharOutput,
        "a-b"
    >>,
    Expect<Equal<
        typeof hyphenOutput,
        "a-b-c"
    >>,
    Expect<Equal<
        typeof hashOutput,
        "a#b#c"
    >>,
    Expect<Equal<
        typeof longOutput,
        "a-b-c-d-e-f-g-h"
    >>,
];
