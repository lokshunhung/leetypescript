import { Dec } from "./dec";
import { Digit } from "./_common";

export type Subtract<T extends Digit[], U extends Digit[]> =
    U extends [0] | []
        ? T
        : Subtract<Dec<T>, Dec<U>>
;
