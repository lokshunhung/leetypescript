export type Chainable<T extends Record<string, any> = {}> = {
    option<K extends string, V extends any>(key: K, value: V): Chainable<Omit<T, K> & Record<K, V>>;
    get(): T;
};
