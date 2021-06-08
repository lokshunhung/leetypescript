import { Equal, Expect } from "@type-challenges/utils";
import { DeepReadonly } from "./deep-readonly";

export {};

type X = {
    a: () => 22;
    b: string;
    c: {
        d: boolean;
        e: {
            g: {
                h: {
                    i: true;
                    j: "string";
                };
                k: "hello";
            };
        };
    };
};

type Expected = {
    readonly a: () => 22;
    readonly b: string;
    readonly c: {
        readonly d: boolean;
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true;
                    readonly j: "string";
                };
                readonly k: "hello";
            };
        };
    };
};

type TestCases = [
    Expect<Equal<
        DeepReadonly<X>,
        Expected
    >>,
    Expect<Equal<
        DeepReadonly<{
            foo: string[];
            bar: {
                food: [number, boolean];
                bard: string;
            };
        }>,
        {
            readonly foo: readonly string[];
            readonly bar: {
                readonly food: readonly [number, boolean];
                readonly bard: string;
            };
        }
    >>,

    Expect<Equal<
        DeepReadonly<string[]>,
        readonly string[]
    >>,
    Expect<Equal<
        DeepReadonly<[number, () => void, { a: string; b: number }]>,
        readonly [number, () => void, { readonly a: string; readonly b: number }]
    >>,
];
