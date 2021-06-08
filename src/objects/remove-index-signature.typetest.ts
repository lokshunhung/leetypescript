import { Equal, Expect } from "@type-challenges/utils";
import { RemoveIndexSignature } from "./remove-index-signature";

export {};

type Foo = {
    [key: string]: any;
    foo(): void;
};

type Bar = {
    [key: number]: any;
    bar(): void;
};

type Baz = {
    bar(): void;
    baz: string;
};

type TestCases = [
    Expect<Equal<
        RemoveIndexSignature<Foo>,
        { foo(): void }
    >>,
    Expect<Equal<
        RemoveIndexSignature<Bar>,
        { bar(): void }
    >>,
    Expect<Equal<
        RemoveIndexSignature<Baz>,
        { bar(): void; baz: string }
    >>,
];
