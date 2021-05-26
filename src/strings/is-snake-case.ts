type Lower = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

type IsSnakeCaseImpl<T extends string, U extends 0 | 1 = 0> =
    T extends `${infer Head}${infer Tail}`
        ? U extends 0
            ? Head extends Lower
                ? IsSnakeCaseImpl<Tail, 1>
                : false
            : Head extends "_"
                ? Tail extends ""
                    ? false
                    : IsSnakeCaseImpl<Tail, 0>
                : Head extends Lower
                    ? IsSnakeCaseImpl<Tail, 1>
                    : false
    : true
;

export type IsSnakeCase<T extends string> =
    IsSnakeCaseImpl<T>
;
