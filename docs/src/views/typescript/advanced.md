# 进阶

## 类型断言

有时，您会拥有 TypeScript 无法获知的值类型信息。
例如，如果您使用 `document.getElementById`，TypeScript 只知道它会返回某种 `HTMLElement，但您可能知道您的页面将始终有一个具有给定` ID 的 `HTMLCanvasElement`。
在这种情况下，您可以使用类型断言来指定更具体的类型：

```ts
// 这里普通HTMLElement就被断言成了HTMLCanvasElement类型
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

与类型注解一样，类型断言会被编译器移除，不会影响代码的运行时行为。
您也可以使用角括号语法（除非代码是在 .tsx 文件中），它与角括号语法是等价的：

```ts
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

::: info
提醒:由于类型断言是在编译时删除的，因此不会对类型断言进行运行时检查。如果类型断言出错，也不会产生异常或 `null`。
:::

TypeScript 只允许类型断言转换为更具体或更不具体的类型版本。这条规则防止了 "不可能的 "强制，例如:

```ts
const x = "hello" as number;
// 将 "字符串 "类型转换为 "数字 "类型可能是个错误，因为这两种类型都没有充分重叠。如果这是有意为之，请先将表达式转换为 "未知数"。 // [!code error]
```

有时，这条规则可能过于保守，会不允许可能有效的更复杂的强制。如果出现这种情况，可以使用两个断言，首先是`any`（或`unknown`，我们稍后会介绍），然后是所需的类型：

```ts
const a = expr as any as T;
```

## 字面类型

字面类型本身并没有什么价值：

```ts
let someValue: "this is a string" = "this is a string";

someValue = "this is a number"; // [!code error]
// Type '"this is a number"' is not assignable to type '"this is a string"'. // [!code error]
```

如果一个变量只能有一个值，那就没什么用了！
但是，将字面量组合成联合变量，就可以表达一个更有用的概念，例如，只接受一组已知值的函数：

```ts
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.   // [!code error]
```

## 非空断言

TypeScript 还有一种特殊的语法，可以在不进行任何显式检查的情况下从类型中删除 null 和 undefined。在任何表达式后写入`!`实际上就是类型断言，即值不是 null 或未定义的：

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

## Enums 枚举类型

枚举（Enums）是 TypeScript 为 JavaScript 添加的一项功能，它允许描述一个值，该值可以是一组可能的命名常量之一。与大多数 TypeScript 特性不同的是，枚举并不是 JavaScript 类型级的新增特性，而是添加到语言和运行时中的特性。正因为如此，你应该知道它的存在，但除非你确信无疑，否则最好不要使用。

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

在上面的数字枚举中，Up 的初始化值为 1，从那时起，下面的所有成员都会自动递增。换句话说，Direction.Up 的值为 1，Down 为 2，Left 为 3，Right 为 4。

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

在这里，Up 的值为 0，Down 的值为 1，等等。这种自动递增行为对于我们可能不关心成员值本身，但关心每个值是否与同一枚举中的其他值不同的情况非常有用。

使用枚举非常简单：只需将任何成员作为枚举本身的属性进行访问，并使用枚举的名称声明类型即可：

```ts
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond("Princess Caroline", UserResponse.Yes);
```
