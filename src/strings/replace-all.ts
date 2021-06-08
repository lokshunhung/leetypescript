// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/119-medium-replaceall/README.md

type ReplaceAllImpl<S extends string, From extends string, To extends string, Result extends string = ""> =
    From extends ""
        ? `${Result}${S}`
        : S extends `${infer H}${From}${infer T}`
            ? ReplaceAllImpl<T, From, To, `${Result}${H}${To}`>
            : `${Result}${S}`
;

export type ReplaceAll<S extends string, From extends string, To extends string> =
    ReplaceAllImpl<S, From, To>
;
