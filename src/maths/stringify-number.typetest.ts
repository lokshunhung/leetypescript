import { Equal, Expect } from "@type-challenges/utils";
import { StringifyNumber } from "./stringify-number";

export {};

type TestCases = [
    Expect<Equal<
        StringifyNumber<[]>,
        ""
    >>,
    Expect<Equal<
        StringifyNumber<[1]>,
        "1"
    >>,
    Expect<Equal<
        StringifyNumber<[1, 2, 3]>,
        "123"
    >>,
    Expect<Equal<
        StringifyNumber<[0, 1, 2]>,
        "012"
    >>,
];
