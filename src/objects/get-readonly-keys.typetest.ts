import { Equal, Expect } from "@type-challenges/utils";
import { GetReadonlyKeys } from "./get-readonly-keys";

export {};

interface Todo1 {
    readonly title: string;
    description: string;
    completed: boolean;
}

interface Todo2 {
    readonly title: string;
    readonly description: string;
    completed?: boolean;
}

type TestCases = [
    Expect<Equal<
        GetReadonlyKeys<Todo1>,
        "title"
    >>,
    Expect<Equal<
        GetReadonlyKeys<Todo2>,
        "title" | "description"
    >>,
];
