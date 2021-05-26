import { Equal, Expect } from "@type-challenges/utils";
import { Trim } from "./trim";

type TestCases = [
    Expect<Equal<
        Trim<"str">,
        "str"
    >>,

    Expect<Equal<
        Trim<" str">,
        "str"
    >>,

    Expect<Equal<
        Trim<"     str">,
        "str"
    >>,

    Expect<Equal<
        Trim<"str   ">,
        "str"
    >>,

    Expect<Equal<
        Trim<"     str     ">,
        "str"
    >>,

    Expect<Equal<
        Trim<"   \n\t foo bar \t">,
        "foo bar"
    >>,
];
