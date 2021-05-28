import { Parse } from "./internal/parse";
import { Stringify } from "./internal/stringify";
import { Subtract } from "./internal/subtract";
import { Cast } from "./internal/_common";

export type SubtractStrings<
    T extends string,
    U extends string
> =
    Subtract<Parse<T>, Parse<U>> extends infer R
        ? Stringify<Cast<R, any[]>>
        : never
;
