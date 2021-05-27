type Numeric = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Lower = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

type IsSnakeCaseImpl<
    T extends string,
    U extends 0 | 1 = 0, // U === 1 -> allow underscore character
    N extends 0 | 1 = 0  // N === 1 -> allow numeric character
> =
    T extends `${infer Head}${infer Tail}`
        ? {
            0: // check if lowercase; else fail
            Head extends Lower
                ? IsSnakeCaseImpl<Tail, 1, 1>
                : false
            ;

            1: // check if lowercase | numeric; else fail
            Head extends Lower | Numeric
                ? IsSnakeCaseImpl<Tail, 1, 1>
                : false
            ;

            2: // check if underscore; else re-fallthrough w/o underscore
            Head extends "_"
                ? IsSnakeCaseImpl<Tail, 0, 1>
                : IsSnakeCaseImpl<T, 0, N>
            ;
        }[
            // if is_last_char {
            //     # disallow_underscore
            //     goto 1 if allow_num else 0
            // } else {
            //     if allow_underscore {
            //         goto 2
            //     } else {
            //         goto 1 if allow_num else 0
            //     }
            // }
            Tail extends ""
                ? N
                : U extends 1
                    ? 2 : N
        ]
        : true
;

/**
 * Returns true if `T` is in snake case:
 * - must begin with lowercase
 * - can contain lowercase, numbers, `_`
 * - must not end with `_`
 * - must not have consecutive `_`
 */
export type IsSnakeCase<T extends string> =
    IsSnakeCaseImpl<T>
;
