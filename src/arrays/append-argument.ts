// https://github.com/type-challenges/type-challenges/blob/84360326c02461ae63b55c6d396ad1679917c430/questions/191-medium-append-argument/README.md

export type AppendArgument<Fn extends (..._: any[]) => any, A> =
    (..._: [...Parameters<Fn>, A]) => ReturnType<Fn>
;
