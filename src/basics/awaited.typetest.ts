import { Equal, Expect } from "@type-challenges/utils";
import { Awaited } from "./awaited";

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type TestCases = [
    Expect<Equal<
        Awaited<X>,
        string
    >>,

    Expect<Equal<
        Awaited<Y>,
        { field: number }
    >>,

    Expect<Equal<
        Awaited<number>,
        number
    >>,

    // Note: While technically this case is not possible,
    // typescript allows such types to be constructed.
    // IMO the `Awaited` type should have this covered,
    // so let's leave this here until future typescript
    // versions decide to break it and this will be removed.
    //
    // Relaxed version: `type Awaited<T> = T extends Promise<infer U> ? U : T;`
    Expect<Equal<
        Awaited<Promise<Promise<boolean>>>,
        boolean
    >>,
];
