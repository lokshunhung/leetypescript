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

interface Todo3 {
    readonly foo: undefined;
    readonly bar: null;
    baz?: string
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
    Expect<Equal<
        GetReadonlyKeys<Todo3>,
        "foo" | "bar"
    >>,
];
