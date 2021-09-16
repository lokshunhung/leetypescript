export type Absolute<T extends number | bigint | string> =
    `${T}` extends `-${infer U}`
        ? U
        : `${T}`
;
