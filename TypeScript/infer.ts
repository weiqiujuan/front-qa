// 表示在 extends 条件语句中待推断的类型变量

type ParamType<T> = T extends (param: infer p) => any ? p : T

interface User {
    name: string;
    age: number;
}

type Func = (user: User) => void;
type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string

// 泛型
function identity<T>(arg: T): T {
    return arg;
}

identity("1");
identity(1)
