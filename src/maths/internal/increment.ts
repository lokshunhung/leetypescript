import { Cast, Digit } from "./_common";

// Key: Digit
// Val: [ has_carry(Boolean), unit(Digit) ]
type IncMap = {
    0: [0, 1];
    1: [0, 2];
    2: [0, 3];
    3: [0, 4];
    4: [0, 5];
    5: [0, 6];
    6: [0, 7];
    7: [0, 8];
    8: [0, 9];
    9: [1, 0];
};

export type Inc<T extends Digit[], O extends Digit[] = []> =
    T extends [...infer Init, infer Last]
        ? IncMap[Cast<Last, keyof IncMap>] extends [infer Carry, infer Unit]
            ? Init extends []
                ? Carry extends 0
                    ? [Unit, ...O]
                    : [Carry, Unit, ...O]
                : Carry extends 0
                    ? [...Cast<Init, Digit[]>, Unit, ...O]
                    : Inc<Cast<Init, Digit[]>, [Cast<Unit, Digit>, ...O]>
            : never
        : never
;
