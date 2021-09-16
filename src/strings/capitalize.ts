// https://github.com/type-challenges/type-challenges/blob/7d8c096db434c90eae24a3f1b3031c8f8db1a868/questions/110-medium-capitalize/README.md

type CapitalizeMap = {
    a: "A";
    b: "B";
    c: "C";
    d: "D";
    e: "E";
    f: "F";
    g: "G";
    h: "H";
    i: "I";
    j: "J";
    k: "K";
    l: "L";
    m: "M";
    n: "N";
    o: "O";
    p: "P";
    q: "Q";
    r: "R";
    s: "S";
    t: "T";
    u: "U";
    v: "V";
    w: "W";
    x: "X";
    y: "Y";
    z: "Z";
};

// Note: natively provided with the compiler by `type Capitalize<S extends string> = intrinsic;`
export type MyCapitalize<T extends string> =
    T extends `${infer Head}${infer Tail}`
        ? Head extends keyof CapitalizeMap
            ? `${CapitalizeMap[Head]}${Tail}`
            : T
        : T
;
