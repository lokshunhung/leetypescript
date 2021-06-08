import { Equal, Expect } from "@type-challenges/utils";
import { ReplaceAll } from "./replace-all";

export {};

type TestCases = [
    Expect<Equal<
        ReplaceAll<"foobar", "bar", "foo">,
        "foofoo"
    >>,
    Expect<Equal<
        ReplaceAll<"foobarbar", "bar", "foo">,
        "foofoofoo"
    >>,
    Expect<Equal<
        ReplaceAll<"foobarbar", "bar", "baz">,
        "foobazbaz"
    >>,
    Expect<Equal<
        ReplaceAll<"t y p e s", " ", "">,
        "types"
    >>,
    Expect<Equal<
        ReplaceAll<"foobarbar", "", "foo">,
        "foobarbar"
    >>,
    Expect<Equal<
        ReplaceAll<"barfoo", "bar", "foo">,
        "foofoo"
    >>,
    Expect<Equal<
        ReplaceAll<"foobarfoobar", "ob", "b">,
        "fobarfobar"
    >>,
    Expect<Equal<
        ReplaceAll<"", "", "">,
        ""
    >>,
];
