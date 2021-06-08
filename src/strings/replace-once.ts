// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/116-medium-replace/README.md

export type ReplaceOnce<S extends string, From extends string, To extends string> =
    From extends ""
        ? S
        : S extends `${infer H}${From}${infer T}`
            ? `${H}${To}${T}`
            : S
;
