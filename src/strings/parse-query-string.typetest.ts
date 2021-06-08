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

    // Additional tests (leading boolean)
    Expect<Equal<
        ParseQueryString<"k1&k2=v2">,
        { k1: true; k2: "v2" }
    >>,
    Expect<Equal<
        ParseQueryString<"k1&k1&k2=v2">,
        { k1: true; k2: "v2" }
    >>,
    Expect<Equal<
        ParseQueryString<"k1&k2=v2&k2=v2">,
        { k1: true; k2: "v2" }
    >>,
    Expect<Equal<
        ParseQueryString<"k1&k1&k2=v2&k2=v3">,
        { k1: true; k2: ["v2", "v3"] }
    >>,

    // Additional tests (trailing boolean)
    Expect<Equal<
        ParseQueryString<"k2=v3&k2=v2&k1&k1">,
        { k1: true; k2: ["v3", "v2"] }
    >>,
    Expect<Equal<
        ParseQueryString<"k2=v2&k2=v2&k1">,
        { k1: true; k2: "v2" }
    >>,
    Expect<Equal<
        ParseQueryString<"k2=v2&k1&k1">,
        { k1: true; k2: "v2" }
    >>,

    // Additional tests (sandwiched boolean)
    Expect<Equal<
        ParseQueryString<"k1&k2=v2&k1">,
        { k1: true; k2: "v2" }
    >>,
    Expect<Equal<
        ParseQueryString<"k1&k2=v2&k2=v3&k1">,
        { k1: true; k2: ["v2", "v3"] }
    >>,
    Expect<Equal<
        ParseQueryString<"k2=v2&k1&k1&k2=v2">,
        { k1: true; k2: "v2" }
    >>,
    Expect<Equal<
        ParseQueryString<"k2=v2&k1&k1&k2=v3">,
        { k1: true; k2: ["v2", "v3"] }
    >>,
];
