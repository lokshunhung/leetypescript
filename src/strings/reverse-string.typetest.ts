import { Equal, Expect } from "@type-challenges/utils";
import { ReverseString } from "./reverse-string";

type TestCases = [
    Expect<Equal<
        ReverseString<"">,
        ""
    >>,
    Expect<Equal<
        ReverseString<"a">,
        "a"
    >>,
    Expect<Equal<
        ReverseString<"123">,
        "321"
    >>,
    Expect<Equal<
        ReverseString<"foo bar baz">,
        "zab rab oof"
    >>,
];
