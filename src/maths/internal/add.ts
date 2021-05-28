import { Dec } from "./dec";
import { Inc } from "./inc";
import { Digit } from "./_common";

export type Add<T extends Digit[], U extends Digit[]> =
    U extends [0] | []
        ? T
        : Add<Inc<T>, Dec<U>>
;
