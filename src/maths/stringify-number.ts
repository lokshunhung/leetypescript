import { Digit } from "./_common";

export type StringifyNumber<T extends any[], O extends string = ""> =
    T extends [infer Head, ...infer Tail]
        ? Head extends number
            ? StringifyNumber<Tail, `${O}${Head}`>
            : never
        : O
;
