import { Equal, Expect } from "@type-challenges/utils";
import { AppendToObject } from "./append-to-object";

export {};

type TestCases = [
    Expect<Equal<
        AppendToObject<
            {
                key: "cat";
                value: "green";
            },
            "home",
            boolean
        >,
        {
            key: "cat";
            value: "green";
            home: boolean;
        }
    >>,

    Expect<Equal<
        AppendToObject<
            {
                key: "dog" | undefined;
                value: "white";
                sun: true;
            },
            "home",
            1
        >,
        {
            key: "dog" | undefined;
            value: "white";
            sun: true;
            home: 1;
        }
    >>,

    Expect<Equal<
        AppendToObject<
            {
                key: "cow";
                value: "yellow";
                sun: false;
            },
            "isMotherRussia",
            false | undefined
        >,
        {
            key: "cow";
            value: "yellow";
            sun: false;
            isMotherRussia: false | undefined;
        }
    >>,
];
