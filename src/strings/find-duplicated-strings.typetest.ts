import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { FindDuplicatedElements } from "./find-duplicated-strings";

export {};

type TestCases = [
    Expect<Equal<
        FindDuplicatedElements<["a", "b", "c"]>,
        []
    >>,

    Expect<Equal<
        FindDuplicatedElements<["a", "b", "c", "b", "a", "d"]>,
        ["b", "a"]
    >>,

    Expect<NotEqual<
        FindDuplicatedElements<["a", "b", "c", "b", "a", "d"]>,
        ["a", "b"]
    >>,

    Expect<Equal<
        FindDuplicatedElements<[
            ...["1", "2", "3", "4", "5"],
            ...["2", "4", "6", "8", "10"],
        ]>,
        ["2", "4"]
    >>,
];
