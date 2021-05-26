import { Equal, Expect } from "@type-challenges/utils";
import { TrimRight } from "./trim-right";

export {};

type TestCases = [
    Expect<Equal<
        TrimRight<"str">,
        "str"
    >>,

    Expect<Equal<
        TrimRight<"str ">,
        "str"
    >>,

    Expect<Equal<
        TrimRight<"str     ">,
        "str"
    >>,

    Expect<Equal<
        TrimRight<"     str     ">,
        "     str"
    >>,

    Expect<Equal<
        TrimRight<"   \n\t foo bar \n \t   ">,
        "   \n\t foo bar"
    >>,

    // @ts-expect-error
    TrimRight<123>,
];
