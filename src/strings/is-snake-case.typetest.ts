import { ExpectFalse, ExpectTrue } from "@type-challenges/utils";
import { IsSnakeCase } from "./is-snake-case";

type TestCases = [
    ExpectTrue<
        IsSnakeCase<"">
    >,
    ExpectTrue<
        IsSnakeCase<"abc">
    >,
    ExpectTrue<
        IsSnakeCase<"abc_def">
    >,
    ExpectTrue<
        IsSnakeCase<"a1">
    >,
    ExpectTrue<
        IsSnakeCase<"abc123">
    >,
    ExpectTrue<
        IsSnakeCase<"ab_c_1">
    >,
    ExpectTrue<
        IsSnakeCase<"abc_123">
    >,
    ExpectTrue<
        IsSnakeCase<"ab12a_123b">
    >,
    ExpectTrue<
        IsSnakeCase<"ab12_123b">
    >,
    ExpectTrue<
        IsSnakeCase<"ab12_c4">
    >,


    ExpectFalse<
        IsSnakeCase<"ABC">
    >,
    ExpectFalse<
        IsSnakeCase<"_abc">
    >,
    ExpectFalse<
        IsSnakeCase<"abc__def">
    >,
    ExpectFalse<
        IsSnakeCase<"abc_">
    >,
    ExpectFalse<
        IsSnakeCase<"1">
    >,
    ExpectFalse<
        IsSnakeCase<"1a">
    >,
    ExpectFalse<
        IsSnakeCase<"1_">
    >,
    ExpectFalse<
        IsSnakeCase<"123abc">
    >,
    ExpectFalse<
        IsSnakeCase<"123_abc">
    >,
];
