import { Equal, Expect } from "@type-challenges/utils"
import { MyExclude } from "./exclude";

type ABC = "a" | "b" | "c";

type TestCases = [
    Expect<Equal<
        MyExclude<ABC, "a">,
        Exclude<ABC, "a">
    >>,

    Expect<Equal<
        MyExclude<ABC, "a" | "b">,
        Exclude<ABC, "a" | "b">
    >>,

    Expect<Equal<
        MyExclude<string | number | (() => void), Function>,
        Exclude<string | number | (() => void), Function>
    >>,
];
