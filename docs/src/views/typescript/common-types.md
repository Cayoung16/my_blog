# 常见类型

## 基本类型

Javascript 有三种常见的基本类型 `string`、`number`和`boolean`

这三种类型分别用来表示字符串、数字以及布尔类型，通常是在变量后面加上 `:` 并写上变量类型

```ts
let msg: string = "hello world";

let num: number = 10;

let flag: boolean = true;
```

## 数组

要设置数组类型，首先需要确定你的数组存放的变量类型，最好是同类型的变量存在一个数组里，例如`[1,2,3]`，当可以确定你的数组内的变量是同类型时，你可以利用`number[]`来表示该数组类型，这种语法适用于任何类型例如`string[]`则是字符串数组，你可能还会遇到`Array<number>`这样的写法，当然,意思是一样的.

```ts
const arr: number[] = [1, 2, 3];
```

## any

Typescript 有一个特殊的类型，就是`any`,他可以表示成任意类型也就是可以识别成任意类型，就像直接写 js 一样,当然这违背了我们使用 Typescript 的初衷，所以，`any`还是少使用

```ts
const obj: any = {
  name: "chen",
};
```

:::info
当你不想为了让 TypeScript 相信某行代码没问题而写出很长的类型时，any 类型就很有用。
:::

当你没有指定类型，而 TypeScript 又无法根据上下文推断类型时，编译器通常会默认使用 any。
但我们通常希望避免这种情况，因为 any 并不进行类型检查。使用编译器标记 noImplicitAny 可以将隐式 any 标记为错误。

使用 const、var 或 let 声明变量时，可以选择添加类型注解，以明确指定变量的类型：

```ts
let myName: string = "Chen";
```

但在大多数情况下，并不需要这样做。只要有可能，TypeScript 会尝试自动推断代码中的类型。例如，变量的类型是根据其初始化器的类型推断的：

```ts
// 无需类型注解 -- "myName "被推断为 "字符串 "类型
let myName = "Chen";
```

## 函数

声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型。参数类型注释位于参数名称之后：

```ts
function foo(name: string) {
  console.log("hello", +name.toUpperCase() + "!!");
}
```

此时，该参数便有了类型 string，当你输入参数为除 string 以外的其他类型时，则会报错提示
数字 "类型的参数不能分配给 "字符串 "类型的参数：

```ts
foo(100);
```

::: danger
Argument of type 'number' is not assignable to parameter of type 'string'.
:::

您还可以添加返回类型注释。返回类型注释显示在参数列表之后：

```ts
function foo(): string {
  console.log("hello!!");
}
```

与变量类型注解一样，通常不需要返回类型注解，因为 TypeScript 会根据函数的返回语句推断其返回类型。上例中的类型注解不会改变任何事情。有些代码库出于文档目的、防止意外更改或个人偏好，会明确指定返回类型。

## 对象类型 Object

除了基本类型外，最常见的类型是对象类型。对象类型指的是任何带有属性的 JavaScript 值，几乎涵盖了所有 JavaScript 值！要定义对象类型，我们只需列出其属性及其类型。
例如，下面是一个接收对象的函数：

```ts
// The parameter's type annotation is an object type
function foo(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

在这里，我们为参数注释了一个类型，其中包含两个属性 x 和 y，它们都是数字类型。您可以使用 `,` 或 `;` 来分隔属性，最后一个分隔符是可选的。

在 JavaScript 中，如果访问不存在的属性，得到的将是未定义的值，而不是运行时错误。因此，在读取可选属性时，必须在使用前检查是否存在未定义属性。

```ts
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided! // [!code error]
  console.log(obj.last.toUpperCase());
  // 'obj.last' is possibly 'undefined'. // [!code error]
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax: // [!code error]
  console.log(obj.last?.toUpperCase());
}
```

## 组合类型

TypeScript 的类型系统允许您使用大量运算符从现有类型中构建新类型。现在，我们已经知道如何编写一些类型，是时候开始以有趣的方式组合它们了。

### 定义一个联合类型

组合类型的第一种方法是联合类型。联合类型是由两个或多个其他类型组成的类型，代表的值可以是这些类型中的任意一个。我们将这些类型中的每一个称为联合成员。

```ts
let id: number | string;
```

提供与联合类型匹配的值非常简单，只需提供与任意联合成员匹配的类型即可。如果您有一个 `union` 类型的值，该如何使用它呢？
TypeScript 只允许您在联合的每个成员都有效的情况下对联合进行操作。例如，如果您有 `union` `string` | `number`，您就不能使用仅适用于 `string` 的方法：

```ts
function printId(id: number | string) {
  console.log(id.toUpperCase());
  // Property 'toUpperCase' does not exist on type 'string | number'. // [!code error]
  // Property 'toUpperCase' does not exist on type 'number'. // [!code error]
}
```

你应该根据不同类型来进行编写逻辑：

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

有时，一个联合体的所有成员都有一些共同点。例如，数组和字符串都有一个 `slice` 方法。如果联盟中的每个成员都有一个共同属性，那么就可以使用该属性，而无需缩小范围：

```ts
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

## 类型别名

我们通过直接在类型注解中编写对象类型和联合类型来使用它们。 这很方便，但是常常会想要多次使用同一个类型，并且通过一个名称引用它。

类型别名正是如此任意类型的一个名称。类型别名的语法是：

```ts
// 在这里我们创建了一个类型别名
type Point = {
  x: number;
  y: number;
};

// 与前面的示例完全相同
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

::: tip
建议类型别名用大驼峰
:::

实际上，不只是对象类型，你可以使用类型别名为任何类型命名。 例如，类型别名可以命名联合类型：

```ts
type ID = number | string;
```

## 接口

接口声明 是命名对象类型的另一种方式：

```ts
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

就像我们上面使用类型别名时一样，这个示例的工作方式就像我们使用了匿名对象类型一样。 TypeScript 只关心我们传递给 `printCoord` 的值的结构 - 它只关心它是否具有预期的属性。 只关心类型的结构和功能，这就是为什么我们说 TypeScript 是一个结构化类型的类型系统。

### 类型别名和接口之间的区别

类型别名和接口非常相似，在大多数情况下你可以在它们之间自由选择。 几乎所有的 interface 功能都可以在 type 中使用，关键区别在于不能重新开放类型以添加新的属性，而接口始终是可扩展的。

#### Interface

使用继承扩展接口

```ts
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

#### Type

使用`&`扩展接口

```ts
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: Boolean;
};

const bear = getBear();
bear.name;
bear.honey;
```

类型创建后不能更改

```ts
type Window = {
  title: string;
};

type Window = {
  ts: TypeScriptAPI;
};
// Error: Duplicate identifier 'Window'. // [!code error]
```
