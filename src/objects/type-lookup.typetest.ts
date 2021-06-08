import { Equal, Expect } from "@type-challenges/utils";
import { LookUp } from "./type-lookup";

export {};

interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}
interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
}
type Animal = Cat | Dog;

interface Flower {
    type: "flower";
    breeds: "Rose" | "Violet";
}
interface Tree {
    type: "tree";
    breeds: "Oak" | "Maple";
}
type Plant = Flower | Tree;

type LivingThings = Animal | Plant;

type TestCases = [
    Expect<Equal<
        LookUp<Animal, "dog">,
        Dog
    >>,
    Expect<Equal<
        LookUp<Animal, "cat">,
        Cat
    >>,
    Expect<Equal<
        LookUp<LivingThings, "flower" | "tree">,
        Plant
    >>,

    // @ts-expect-error
    LookUp<{ noTypeProperty: Error }, string>,
    // @ts-expect-error
    LookUp<{ type: "LookUp 2nd type argument not string" }, 1>
];
