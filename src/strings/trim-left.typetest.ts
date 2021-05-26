import { Equal, Expect } from "@type-challenges/utils";
import { TrimLeft } from "./trim-left";

export {};

type TestCases = [
    Expect<Equal<
        TrimLeft<"str">,
        "str"
    >>,

    Expect<Equal<
        TrimLeft<" str">,
        "str"
    >>,

    Expect<Equal<
        TrimLeft<"     str">,
        "str"
    >>,

    Expect<Equal<
        TrimLeft<"     str     ">,
        "str     "
    >>,

    Expect<Equal<
        TrimLeft<"   \n\t foo bar ">,
        "foo bar "
    >>,

    // @ts-expect-error
    TrimLeft<123>,
];
