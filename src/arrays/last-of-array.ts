export type Last<T extends any[]> =
    T extends [...any[], infer LLast]
        ? LLast
        : T extends [infer Head, ...infer Tail]
            ? Tail extends [any, ...any[]]
                ? Last<Tail>
                : Head | Tail[number]
            : T[number]
;
