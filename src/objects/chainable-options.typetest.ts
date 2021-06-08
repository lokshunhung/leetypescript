import { Alike, Expect } from "@type-challenges/utils";
import { Chainable } from "./chainable-options";

export {};

declare const a: Chainable;

const resultA = a
    .option("foo", 123)
    .option("bar", { value: "Hello World" })
    .option("name", "type-challenges")
    .get();

declare const b: Chainable;

const resultB = b
    .option("food", "123")
    .option("food", 123)
    .option("bard", () => {})
    .get();

type TestCases = [
    Expect<Alike<
        typeof resultA,
        {
            foo: number;
            bar: { value: string };
            name: string;
        }
    >>,
    Expect<Alike<
        typeof resultB,
        {
            food: number;
            bard: () => void;
        }
    >>,
];
