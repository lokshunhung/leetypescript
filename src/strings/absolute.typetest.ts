import { Expect, Equal } from "@type-challenges/utils";
import { Absolute } from "./absolute";

export {};

type TestCases = [
    Expect<Equal<
        Absolute<0>,
        "0"
    >>,
    Expect<Equal<
        Absolute<-0>,
        "0"
    >>,
    Expect<Equal<
        Absolute<10>,
        "10"
    >>,
    Expect<Equal<
        Absolute<-5>,
        "5"
    >>,
    Expect<Equal<
        Absolute<"0">,
        "0"
    >>,
    Expect<Equal<
        Absolute<"-0">,
        "0"
    >>,
    Expect<Equal<
        Absolute<"10">,
        "10"
    >>,
    Expect<Equal<
        Absolute<"-5">,
        "5"
    >>,
    Expect<Equal<
        Absolute<-1_000_000n>,
        "1000000"
    >>,
    Expect<Equal<
        Absolute<9_999n>,
        "9999"
    >>,
];
