import { Alike, Expect } from "@type-challenges/utils";
import { MyReadonly2 } from "./readonly-2";

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
        MyReadonly2<Todo1>,
        Readonly<Todo1>
    >>,
    Expect<Alike<
        MyReadonly2<Todo1, "title" | "description">,
        Expected
    >>,
    Expect<Alike<
        MyReadonly2<Todo2, "title" | "description">,
        Expected
    >>,

    // @ts-expect-error
    MyReadonly2<Todo1, "notExistsProp">,
];
