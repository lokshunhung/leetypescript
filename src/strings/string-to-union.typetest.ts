import { Equal, Expect } from "@type-challenges/utils";
import { StringToUnion } from "./string-to-union";

export {};

type TestCases = [
    Expect<Equal<
        StringToUnion<"">,
        never
    >>,
    Expect<Equal<
        StringToUnion<"t">,
        "t"
    >>,
    Expect<Equal<
        StringToUnion<"hello">,
        "h" | "e" | "l" | "l" | "o"
    >>,
    Expect<Equal<
        StringToUnion<"coronavirus">,
        "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
    >>,
];
