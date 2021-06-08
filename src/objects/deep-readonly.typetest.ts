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
];
