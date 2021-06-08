import { Alike, Expect } from "@type-challenges/utils";
import { ReadonlyPick } from "./readonly-pick";

export {};

interface Todo1 {
    title: string;
    description?: string;
    completed: boolean;
}

interface Todo2 {
    readonly title: string;
    description?: string;
    completed: boolean;
}

interface Expected {
    readonly title: string;
    readonly description?: string;
    completed: boolean;
}

type TestCases = [
    Expect<Alike<
        ReadonlyPick<Todo1>,
        Readonly<Todo1>
    >>,
    Expect<Alike<
        ReadonlyPick<Todo1, "title" | "description">,
        Expected
    >>,
    Expect<Alike<
        ReadonlyPick<Todo2, "title" | "description">,
        Expected
    >>,

    // @ts-expect-error
    ReadonlyPick<Todo1, "notExistsProp">,
];
