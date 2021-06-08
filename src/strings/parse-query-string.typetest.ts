import { Equal, Expect } from "@type-challenges/utils";
import { ParseQueryString } from "./parse-query-string";

export {};

type TestCases = [
    Expect<Equal<
        ParseQueryString<"">,
        {}
    >>,
    Expect<Equal<
        ParseQueryString<"k1">,
        { k1: true }
    >>,
    Expect<Equal<
        ParseQueryString<"k1&k1">,
        { k1: true }
    >>,
    Expect<Equal<
        ParseQueryString<"k1&k2">,
        { k1: true; k2: true }
    >>,
    Expect<Equal<
        ParseQueryString<"k1=v1">,
        { k1: "v1" }
    >>,
    Expect<Equal<
        ParseQueryString<"k1=v1&k1=v2">,
        { k1: ["v1", "v2"] }
    >>,
    Expect<Equal<
        ParseQueryString<"k1=v1&k2=v2">,
        { k1: "v1"; k2: "v2" }
    >>,
    Expect<Equal<
        ParseQueryString<"k1=v1&k2=v2&k1=v2">,
        { k1: ["v1", "v2"]; k2: "v2" }
    >>,
    Expect<Equal<
        ParseQueryString<"k1=v1&k2">,
        { k1: "v1"; k2: true }
    >>,
    Expect<Equal<
        ParseQueryString<"k1=v1&k1=v1">,
        { k1: "v1" }
    >>,
];
