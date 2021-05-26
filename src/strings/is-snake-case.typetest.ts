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
];
