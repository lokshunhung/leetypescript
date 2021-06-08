import { Equal, Expect } from '@type-challenges/utils';
import { GetOptionalKeys } from './get-optional-keys';

export {};

type TestCases = [
    Expect<Equal<
        GetOptionalKeys<{ a: number, b?: string }>,
        "b"
    >>,
    Expect<Equal<
        GetOptionalKeys<{ a: undefined, b?: undefined }>,
        "b"
    >>,
    Expect<Equal<
        GetOptionalKeys<{ a: undefined, b?: undefined, c?: string, d?: null }>,
        "b" | "c" | "d"
    >>,
    Expect<Equal<
        GetOptionalKeys<{}>,
        never
    >>,
];
