import { Equal, Expect } from "@type-challenges/utils";
import { Length } from "./length-of-tuples";

export {};

type Cars = ["tesla", "model 3", "model X", "model Y"];

type SpaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"];

type TestCases = [
    Expect<Equal<
        Length<Cars>,
        4
    >>,

    Expect<Equal<
        Length<SpaceX>,
        5
    >>,
];
