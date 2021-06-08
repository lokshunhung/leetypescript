import { Equal, Expect } from "@type-challenges/utils";
import { PromiseAllStrict } from "./promise-all-strict";

export {};

const promiseAllTest1 = PromiseAllStrict([1, 2, 3] as const);
const promiseAllTest2 = PromiseAllStrict([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAllStrict([1, 2, Promise.resolve(3)]);

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
