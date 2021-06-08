// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/1367-medium-remove-index-signature/README.md

// Note: `symbol` not handled
type IndexKeyAsNever<K> =
    string extends K
        ? never
        : number extends K
            ? never
            : K
;

export type RemoveIndexSignature<T> =
    {
        [K in keyof T as IndexKeyAsNever<K>]: T[K];
    }
;
