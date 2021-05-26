import { Equal, Expect } from "@type-challenges/utils";
import { If } from "./if";

export {};

type TestCases = [
    Expect<Equal<
        If<true, "a", "b">,
        "a"
    >>,

    Expect<Equal<
        If<false, "a", 2>,
        2
    >>,

    // @ts-expect-error
    If<null, "a", "b">,
];
