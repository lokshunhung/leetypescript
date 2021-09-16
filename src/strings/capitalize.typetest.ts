import { Expect, Equal } from "@type-challenges/utils";
import { MyCapitalize } from "./capitalize";

export {};

type TestCases = [
    Expect<Equal<
        MyCapitalize<"foobar">,
        "Foobar"
    >>,
    Expect<Equal<
        MyCapitalize<"FOOBAR">,
        "FOOBAR"
    >>,
    Expect<Equal<
        MyCapitalize<"foo bar">,
        "Foo bar"
    >>,
    Expect<Equal<
        MyCapitalize<"">,
        ""
    >>,
];
