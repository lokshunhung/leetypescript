import { Equal, Expect } from "@type-challenges/utils";
import { MyReturnType } from "./return-type";

export {};

type ComplexObject = {
    a: [12, "foo"];
    bar: "hello";
    prev(): number;
}

const fn = (v: boolean) => v ? 1 : 2;
const fn1 = (v: boolean, w: any) => v ? 1 : 2;

type TestCases = [
    Expect<Equal<
        MyReturnType<() => string>,
        string
    >>,

    Expect<Equal<
        MyReturnType<() => 123>,
        123
    >>,

    Expect<Equal<
        MyReturnType<() => ComplexObject>,
        ComplexObject
    >>,

    Expect<Equal<
        MyReturnType<() => Promise<boolean>>,
        Promise<boolean>
    >>,

    Expect<Equal<
        MyReturnType<() => () => "foo">,
        () => "foo"
    >>,

    Expect<Equal<
        MyReturnType<typeof fn>,
        1 | 2
    >>,

    Expect<Equal<
        MyReturnType<typeof fn1>,
        1 | 2
    >>,
];
