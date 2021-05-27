import { Cast, Digit } from "./_common";

// Key: Digit
// Val: [ has_borrow(Boolean), unit(Digit) ]
export type DecMap = {
    0: [1, 9];
    1: [0, 0];
    2: [0, 1];
    3: [0, 2];
    4: [0, 3];
    5: [0, 4];
    6: [0, 5];
    7: [0, 6];
    8: [0, 7];
    9: [0, 8];
};

export type Dec<T extends Digit[], O extends Digit[] = []> =
    T extends [...infer Init, infer Last]
        ? DecMap[Cast<Last, keyof DecMap>] extends [infer Borrow, infer Unit]
            ? Init extends []
                ? Borrow extends 1
                    ? never // TODO: handle negative?
                    : Unit extends 0 ? O extends [] ? [0] : O : [Unit, ...O]
                : Borrow extends 1
                    ? Dec<Cast<Init, Digit[]>, [Cast<Unit, Digit>, ...O]>
                    : [...Cast<Init, Digit[]>, Unit, ...O]
            : never
        : never
;
