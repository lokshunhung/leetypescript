import { Equal, Expect } from "@type-challenges/utils";
import { Stringify } from "./stringify";

export {};

type TestCases = [
    Expect<Equal<
        Stringify<[]>,
        ""
    >>,
    Expect<Equal<
        Stringify<[1]>,
        "1"
    >>,
    Expect<Equal<
        Stringify<[1, 2, 3]>,
        "123"
    >>,
    Expect<Equal<
        Stringify<[0, 1, 2]>,
        "012"
    >>,
];
