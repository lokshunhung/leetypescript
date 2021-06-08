import { Equal, Expect } from "@type-challenges/utils";
import { TupleToUnion } from "./tuple-to-union";

export {};

type TestCases = [
    Expect<Equal<
        TupleToUnion<[123, "456", true]>,
        123 | "456" | true
    >>,

    Expect<Equal<
        TupleToUnion<[123]>,
        123
    >>,
];
