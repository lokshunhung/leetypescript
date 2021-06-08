import { Equal, Expect } from "@type-challenges/utils";
import { PromiseAll } from "./promise-all";

export {};

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

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
];
