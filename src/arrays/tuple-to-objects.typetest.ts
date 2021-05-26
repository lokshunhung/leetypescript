import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { TupleToObject } from "./tuple-to-object";

export {};

type Cars = ["tesla", "model 3", "model X", "model Y"];

type TestCases = [
    Expect<Equal<
        TupleToObject<Cars>,
        {
            tesla: "tesla";
            "model 3": "model 3";
            "model X": "model X";
            "model Y": "model Y";
        }
    >>,

    Expect<NotEqual<
        TupleToObject<Cars>,
        {
            tesla: "tesla";
            "model 3": "tesla";
            "model X": "tesla";
            "model Y": "tesla";
        }
    >>,

    Expect<NotEqual<
        TupleToObject<Cars>,
        {
            tesla: "tesla";
        }
    >>,
];
