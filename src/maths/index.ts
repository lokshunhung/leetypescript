import { Add } from "./addition";
import { ParseNumber } from "./parse-number";
import { StringifyNumber } from "./stringify-number";
import { Cast } from "./_common";

export type AddStrings<
    T extends string,
    U extends string
> =
    Add<ParseNumber<T>, ParseNumber<U>> extends infer R
        ? StringifyNumber<Cast<R, any[]>>
        : never
;
