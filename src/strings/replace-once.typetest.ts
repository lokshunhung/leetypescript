import { Equal, Expect } from "@type-challenges/utils";
import { ReplaceOnce } from "./replace-once";

export {};

type TestCases = [
    Expect<Equal<
        ReplaceOnce<"foobar", "bar", "foo">,
        "foofoo"
    >>,
    Expect<Equal<
        ReplaceOnce<"foobarbar", "bar", "foo">,
        "foofoobar"
    >>,
    Expect<Equal<
        ReplaceOnce<"foobarbar", "", "foo">,
        "foobarbar"
    >>,
    Expect<Equal<
        ReplaceOnce<"", "", "">,
        ""
    >>,
];
