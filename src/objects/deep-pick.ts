// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/956-hard-deeppick/README.md

// https://stackoverflow.com/a/50375286
type UnionToIntersection<U> =
    (U extends any ? (_: U) => void : never) extends
            ((_: infer I) => void)
        ? I
        : never
;

type DeepPickUnion<T, P extends string> =
    P extends `${infer PHead}.${infer PTail}`
        ? PHead extends keyof T
            ? Record<PHead, DeepPickUnion<T[PHead], PTail>>
            : unknown
        : P extends keyof T
            ? Record<P, T[P]>
            : unknown
;

export type DeepPick<T, P extends string> =
    UnionToIntersection<DeepPickUnion<T, P>>
;
