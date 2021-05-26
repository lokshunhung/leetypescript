// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/4-easy-pick/README.md

import { Expect, Equal } from "@type-challenges/utils";

type MyPick<T, K extends keyof T> =
    {
        [Key in K]: T[Key];
    }
;

declare namespace TestCases {
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
}
