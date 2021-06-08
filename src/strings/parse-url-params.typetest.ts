import { Equal, Expect, NotEqual } from "@type-challenges/utils";
import { ParseURLParams, URLParamsRecord } from "./parse-url-params";

export {};

type PokemonURL = "https://fake-pokemon-api.com/api/generation/{gameGeneration}/pokemon/{pokemonId}";
type KMBURL = "https://data.etabus.gov.hk/v1/transport/kmb/route/{route}/{direction}/{service_type}";

type TestParseQueryParams = [
    Expect<Equal<
        ParseURLParams<PokemonURL>,
        ["gameGeneration", "pokemonId"]
    >>,

    Expect<Equal<
        ParseURLParams<KMBURL>,
        ["route", "direction", "service_type"]
    >>,
];

type TestParseQueryParams_OrderNotPreserved = [
    Expect<NotEqual<
        ParseURLParams<PokemonURL>,
        ["pokemonId", "gameGeneration"]
    >>,

    Expect<NotEqual<
        ParseURLParams<KMBURL>,
        ["service_type", "direction", "route"]
    >>,
];

type TestURLQueryParams = [
    Expect<Equal<
        URLParamsRecord<PokemonURL>,
        { gameGeneration: string; pokemonId: string }
    >>,

    Expect<Equal<
        URLParamsRecord<KMBURL>,
        { route: string; direction: string; service_type: string }
    >>,
];

type TestURLQueryParams_UnmatchedProperties = [
    Expect<NotEqual<
        URLParamsRecord<PokemonURL>,
        { gameGeneration: string; pokemonId: string; extraProp: string }
    >>,

    Expect<NotEqual<
        URLParamsRecord<KMBURL>,
        { route: string }
    >>,
];
