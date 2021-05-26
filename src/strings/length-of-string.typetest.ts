import { Equal, Expect } from "@type-challenges/utils";
import { Length } from "./length-of-string";

export {};

type TestCases = [
    Expect<Equal<
        Length<"">,
        0
    >>,

    Expect<Equal<
        Length<"a">,
        1
    >>,

    Expect<Equal<
        Length<"abc">,
        3
    >>,
];
