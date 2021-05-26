// https://github.com/type-challenges/type-challenges/blob/d2b241a380fb09b54fe3b41d7af4f7de0bea26ef/questions/7-easy-readonly/README.md

import { Expect, Equal } from "@type-challenges/utils";

type MyReadonly<T> =
    {
        +readonly [K in keyof T]: T[K];
    }
;

declare namespace TestCases {
    interface Todo1 {
        title: string
        description: string
        completed: boolean
    }

    type TestMyReadonly = [
        Expect<Equal<
            MyReadonly<Todo1>,
            Readonly<Todo1>
        >>,
    ];
}
