import { Writable } from "./writable";

export {};

interface Todo1 {
    readonly title: string
    readonly description: string
    readonly completed: boolean
}

declare let todo: Todo1;

// @ts-expect-error
todo.title = "a";

declare let writableTodo: Writable<Todo1>;

writableTodo.title = "a";
