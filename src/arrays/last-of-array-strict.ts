type LastStrictImpl<T extends any[]> =
    T extends [...any[], infer LLast]
        ? LLast
        : T extends [infer Head, ...infer Tail]
            ? Tail extends [any, ...any[]]
                ? LastStrictImpl<Tail>
                : Head | Tail[number]
            : T[number]
;

export type LastStrict<T extends any[]> =
    T extends []
        ? never
        : T extends [any, ...any[]]
            ? LastStrictImpl<T>
            : T extends [...any[], any]
                ? LastStrictImpl<T>
                : T[number] | undefined
;
