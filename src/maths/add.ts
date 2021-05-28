import { Add } from "./internal/addition";
import { ParseNumber } from "./internal/parse-number";
import { StringifyNumber } from "./internal/stringify-number";
import { Cast } from "./internal/_common";

export type AddStrings<
    T extends string,
    U extends string
> =
    Add<ParseNumber<T>, ParseNumber<U>> extends infer R
        ? StringifyNumber<Cast<R, any[]>>
        : never
;
