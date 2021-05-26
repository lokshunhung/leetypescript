import {Equal, Expect, NotEqual} from "@type-challenges/utils"

/**
 * Returns query params string array. Preserves param position.
 */
export type ParseQueryParams<T extends string, Store extends string[] = []> =
    T extends `${string}{${infer Tail}`
        ? Tail extends `${infer Param}}${infer Rest}`
            ? ParseQueryParams<Rest, [...Store, Param]>
            : unknown
        : Store
;

/**
 * Returns object interface with query params name as keys.
 */
export type URLQueryParams<T extends string> =
    Record<ParseQueryParams<T>[number], string>
;

declare namespace TestCases {
    type PokemonURL = "https://fake-pokemon-api.com/api/generation/{gameGeneration}/pokemon/{pokemonId}";
    type KMBURL = "https://data.etabus.gov.hk/v1/transport/kmb/route/{route}/{direction}/{service_type}";

    type TestParseQueryParams = [
        Expect<Equal<
            ParseQueryParams<PokemonURL>,
            ["gameGeneration", "pokemonId"]
        >>,

        Expect<Equal<
            ParseQueryParams<KMBURL>,
            ["route", "direction", "service_type"]
        >>,
    ];

    type TestParseQueryParams_OrderNotPreserved = [
        Expect<NotEqual<
            ParseQueryParams<PokemonURL>,
            ["pokemonId", "gameGeneration"]
        >>,

        Expect<NotEqual<
            ParseQueryParams<KMBURL>,
            ["service_type", "direction", "route"]
        >>,
    ];

    type TestURLQueryParams = [
        Expect<Equal<
            URLQueryParams<PokemonURL>,
            { gameGeneration: string; pokemonId: string }
        >>,

        Expect<Equal<
            URLQueryParams<KMBURL>,
            { route: string; direction: string; service_type: string }
        >>,
    ];

    type TestURLQueryParams_UnmatchedProperties = [
        Expect<NotEqual<
            URLQueryParams<PokemonURL>,
            { gameGeneration: string; pokemonId: string; extraProp: string }
        >>,

        Expect<NotEqual<
            URLQueryParams<KMBURL>,
            { route: string }
        >>,
    ];
}
