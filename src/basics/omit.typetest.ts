import { Equal, Expect } from "@type-challenges/utils";
import { MyOmit } from "./omit";

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TestCases = [
    Expect<Equal<
        MyOmit<Todo, "description">,
        { title: string; completed: boolean }
    >>,

    Expect<Equal<
        MyOmit<Todo, "description" | "completed">,
        { title: string }
    >>,
];
