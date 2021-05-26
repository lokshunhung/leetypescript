import { Equal, Expect } from "@type-challenges/utils";
import { Includes } from "./includes";

export {};

type TestCases = [
    Expect<Equal<
        Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">,
        true
    >>,

    Expect<Equal<
        Includes<["Kars", "Esidisi","Wamuu", "Santana"], "Dio">,
        false
    >>,

    Expect<Equal<
        Includes<[1, 2, 3, 5, 6, 7], 7>,
        true
    >>,

    Expect<Equal<
        Includes<[1, 2, 3, 5, 6, 7], 4>,
        false
    >>,
];
