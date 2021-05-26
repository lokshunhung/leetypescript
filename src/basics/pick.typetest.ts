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
        Expected1, MyPick<Todo, 'title'>
    >>,

    Expect<Equal<
        Expected2, MyPick<Todo, 'title' | 'completed'>
    >>,

    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
];
