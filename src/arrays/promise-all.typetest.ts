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

const p4Tail = [Promise.resolve(true), Promise.resolve(false)];
const promiseAllTest4 = PromiseAll([1, Promise.resolve(2), ...p4Tail]);

const p5Init = [Promise.resolve(true), Promise.resolve(false)];
const promiseAllTest5 = PromiseAll([...p5Init, 3, Promise.resolve(4)]);

const p6Mid = [Promise.resolve(true), Promise.resolve(false)];
const promiseAllTest6 = PromiseAll(["one", Promise.resolve("two"), ...p6Mid, 5, Promise.resolve(6)]);

type TestCases_SpreadTuples = [
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

const p7Tail = [Promise.resolve(true), "false", false];
const promiseAllTest7 = PromiseAll([1, Promise.resolve(2), ...p7Tail]);

const p8Init = [Promise.resolve(1), [true, false], Promise.resolve(3)];
const promiseAllTest8 = PromiseAll([...p8Init, "four", Promise.resolve("five")]);

const p9Mid = [Promise.resolve(true), { 5: "five" }, Promise.resolve({ p: false })];
const promiseAllTest9 = PromiseAll([
    Promise.resolve(1), "two", Promise.resolve(3),
    ...p9Mid,
    Promise.resolve(Symbol("seven")), () => {}, Symbol("nine"),
]);

type TestCases_SpreadTuplesMixed = [
    Expect<Equal<
        typeof promiseAllTest7,
        Promise<[number, number, ...(boolean | string)[]]>
    >>,
    Expect<Equal<
        typeof promiseAllTest8,
        Promise<[...(number | boolean[])[], string, string]>
    >>,
    Expect<Equal<
        typeof promiseAllTest9,
        Promise<[
            number, string, number,
            ...(boolean | { 5: string } | { p: boolean })[],
            symbol, () => void, symbol
        ]>
    >>,
];
