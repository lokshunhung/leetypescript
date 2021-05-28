import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { AddStrings } from "./index";

export {};

type TestCases = [
    Expect<Equal<
        AddStrings<"0", "0">,
        "0"
    >>,
    Expect<Equal<
        AddStrings<"1", "2">,
        "3"
    >>,
    Expect<Equal<
        AddStrings<"12", "34">,
        "46"
    >>,

    Expect<NotEqual<
        AddStrings<"1", "1">,
        "11"
    >>,
    Expect<NotEqual<
        AddStrings<"41", "12">,
        "50"
    >>,
];
