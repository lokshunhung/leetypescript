import { Equal, Expect } from "@type-challenges/utils";
import { MyPick } from "./pick";

export {};

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
}

interface Expected2 {
    title: string
    completed: boolean
}

type TestCases = [
    Expect<Equal<
        MyPick<Todo, "title">,
        Expected1
    >>,

    Expect<Equal<
        MyPick<Todo, "title" | "completed">,
        Expected2
    >>,

    // @ts-expect-error
    MyPick<Todo, "title" | "completed" | "invalid">,
];
