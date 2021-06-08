import { Equal, Expect } from "@type-challenges/utils";
import { AppendArgument } from "./append-argument";

export {};

type TestCases = [
    Expect<Equal<
        AppendArgument<(a: number, b: string) => number, boolean>,
        (a: number, b: string, x: boolean) => number
    >>,
    Expect<Equal<
        AppendArgument<() => void, undefined>,
        (x: undefined) => void
    >>,
];
