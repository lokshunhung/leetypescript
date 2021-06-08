// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/12-medium-chainable-options/README.md

export type Chainable<T extends Record<string, any> = {}> = {
    option<K extends string, V extends any>(key: K, value: V): Chainable<Omit<T, K> & Record<K, V>>;
    get(): T;
};
