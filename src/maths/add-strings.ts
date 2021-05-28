import { Add } from "./internal/add";
import { Parse } from "./internal/parse";
import { Stringify } from "./internal/stringify";
import { Cast } from "./internal/_common";

export type AddStrings<
    T extends string,
    U extends string
> =
    Add<Parse<T>, Parse<U>> extends infer R
        ? Stringify<Cast<R, any[]>>
        : never
;
