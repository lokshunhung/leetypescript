import { Cast, Digit } from "./_common";

type DigitMap =
    {
        "0": 0;
        "1": 1;
        "2": 2;
        "3": 3;
        "4": 4;
        "5": 5;
        "6": 6;
        "7": 7;
        "8": 8;
        "9": 9;
    }
;

export type ParseNumber<T extends string, O extends any[] = []> =
    T extends `${infer Head}${infer Tail}`
        ? Head extends `${Digit}`
            ? Tail extends ""
                ? Cast<[...O, DigitMap[Head]], Digit[]>
                : ParseNumber<Tail, [...O, DigitMap[Head]]>
            : never
        : never
;
