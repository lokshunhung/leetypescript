import { Equal, Expect } from "@type-challenges/utils";
import { MyReadonly } from "./readonly";

export {};

interface Todo1 {
    title: string
    description: string
    completed: boolean
}

type TestCases = [
    Expect<Equal<
        MyReadonly<Todo1>,
        Readonly<Todo1>
    >>,
];
