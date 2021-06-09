import { Equal, Expect } from "@type-challenges/utils";
import { Get } from "./typed-get";

export {};

type Data = {
    foo: {
        bar: {
            value: "foobar";
            count: 6;
        };
        included: true;
    };
    hello: "world";
};

type TestCases = [
    Expect<Equal<
        Get<Data, "hello">,
        "world"
    >>,
    Expect<Equal<
        Get<Data, "foo.bar.count">,
        6
    >>,
    Expect<Equal<
        Get<Data, "foo.bar">,
        { value: "foobar"; count: 6 }
    >>,
    Expect<Equal<
        Get<Data, "no.existed">,
        never
    >>,
];
