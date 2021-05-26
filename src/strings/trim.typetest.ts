import { Equal, Expect } from "@type-challenges/utils";
import { Trim } from "./trim";

type TestTrim = [
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

type TestTrimLeft = [
    Expect<Equal<
        Trim<"str", "Left">,
        "str"
    >>,

    Expect<Equal<
        Trim<" str", "Left">,
        "str"
    >>,

    Expect<Equal<
        Trim<"     str", "Left">,
        "str"
    >>,

    Expect<Equal<
        Trim<"     str     ", "Left">,
        "str     "
    >>,

    Expect<Equal<
        Trim<"   \n\t foo bar ", "Left">,
        "foo bar "
    >>,

    // @ts-expect-error
    Trim<123, "Left">,
];

type TestTrimRight = [
    Expect<Equal<
        Trim<"str", "Right">,
        "str"
    >>,

    Expect<Equal<
        Trim<"str ", "Right">,
        "str"
    >>,

    Expect<Equal<
        Trim<"str     ", "Right">,
        "str"
    >>,

    Expect<Equal<
        Trim<"     str     ", "Right">,
        "     str"
    >>,

    Expect<Equal<
        Trim<"   \n\t foo bar \n \t   ", "Right">,
        "   \n\t foo bar"
    >>,

    // @ts-expect-error
    Trim<123, "Right">,
];
