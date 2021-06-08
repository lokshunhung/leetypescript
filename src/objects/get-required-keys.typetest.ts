import { Equal, Expect } from "@type-challenges/utils";
import { RequiredKeys } from "./get-required-keys";

export {};

type TestCases = [
    Expect<Equal<
        RequiredKeys<{ a: number; b?: string }>,
        "a"
    >>,
    Expect<Equal<
        RequiredKeys<{ a: undefined; b?: undefined }>,
        "a"
    >>,
    Expect<Equal<
        RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
        "a" | "c" | "d"
    >>,
    Expect<Equal<
        RequiredKeys<{}>,
        never
    >>,
];
