// https://github.com/type-challenges/type-challenges/blob/6d1b9b46050de3b7bfbf22cdb7cb8829ff514d99/questions/3060-easy-unshift/README.md

export type Unshift<T extends any[], U> =
    [U, ...T]
;
