import { Equal, Expect } from "@type-challenges/utils";
import { PromiseAll } from "./promise-all";

export {};

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

const p4Tail = [Promise.resolve(true), Promise.resolve(false)];
const promiseAllTest4 = PromiseAll([1, Promise.resolve(2), ...p4Tail]);

const p5Init = [Promise.resolve(true), Promise.resolve(false)];
const promiseAllTest5 = PromiseAll([...p5Init, 3, Promise.resolve(4)]);

const p5Mid = [Promise.resolve(true), Promise.resolve(false)];
const promiseAllTest6 = PromiseAll(["one", Promise.resolve("two"), ...p5Mid, 5, Promise.resolve(6)]);

type TestCases = [
    Expect<Equal<
        typeof promiseAllTest1,
        Promise<[1, 2, 3]>
    >>,
    Expect<Equal<
        typeof promiseAllTest2,
        Promise<[1, 2, number]>
    >>,
    Expect<Equal<
        typeof promiseAllTest3,
        Promise<[number, number, number]>
    >>,

    Expect<Equal<
        typeof promiseAllTest4,
        Promise<[number, number, ...boolean[]]>
    >>,
    Expect<Equal<
        typeof promiseAllTest5,
        Promise<[...boolean[], number, number]>
    >>,
    Expect<Equal<
        typeof promiseAllTest6,
        Promise<[string, string, ...boolean[], number, number]>
    >>,
];
