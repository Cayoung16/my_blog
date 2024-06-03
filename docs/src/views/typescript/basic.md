# 学习 Typescript

## Typescript 的使用意义

为什么要使用 Typescript，当你在使用 Javascript 进行代码编写时如果进行了以下代码的编写：

```js
let message = "hello world";
message();
```

常理来说`message`变量是一个字符串并不能作为函数调用，但是 Javascript 在编写代码时并不会进行检查，当这块代码进入运行状态时才会报错并提示`message`不是一个函数，这显然并不是我们想看到的，我们希望在代码编写时，开发工具就可以自动识别到错误，因此我们需要利用 Typescript 来进行检查。

```ts
let message = "hello world";

message();
```

::: danger
This expression is not callable.
Type 'String' has no call signatures.
这里提示 message 并不能作为函数执行，它是一个字符串
:::

同样，对象的属性也是可以进行检测的，例如：

```js
let obj = {
  name: "chen",
  age: 18,
};

obj.location;
```

此时读取一个不存在的对象属性`obj.location` Javascript 也并不会进行报错，只有在运行时才会抛出错误

使用 Typescript 类型检测在读取不存在的变量或者对象属性时则会马上警告

::: danger
Property 'location' does not exist type '{ name: string; age: number; }'
:::

## 如何使用 Typescript

首先全局安装 Typescript，执行安装命令：

```shell
npm install -g typescript
```

:tada:
