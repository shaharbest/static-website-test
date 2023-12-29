---
title: "Functions"
date: 2023-09-27T14:14:03+03:00
---

## Regular Function Definition

```js
function printKing() {
    console.log('avi biter');
}

printKing();
```

## Function Value

```js
const nisim = 42;

const shlomo = 'gimel yafit';

const printSinger = function() {
    return 'shimi tavori';
};
```

We can use it the same as regular function:

```js
const printKing = function() {
    console.log('avi biter');
};

printKing();
```

## Caveat

assignment of function value is not hoisted as regular function definition.

```js
printKing(); // works fine

function printKing() {
    console.log('avi biter');
}
```

```js
printKing();
// error:
// Uncaught ReferenceError: can't access lexical
// declaration 'printKing' before initialization

const printKing = function() {
    console.log('avi biter');
};
```

## Callback

a function passed into another function as an argument, which is then invoked
inside the outer function to complete some kind of routine or action.

```js
const greeting = function(name) {
	alert('Hello ' + name);
};

function processUserInput(callback) {
	const name = prompt("Please enter your name.");
	callback(name);
}

processUserInput(greeting);
```

### Use Alias

```js
function processUserInput(callback) {
	var name = prompt("Please enter your name.");
	callback(name);
}

processUserInput(function(name) {
	alert('Hello ' + name);
});
```

# Arrow Function

## Multiple Lines + Multiple Parameters

```js
const doSomething = function(p1, p2, p3) {
    // first line
    // second line
    // ...
};
```

arrow version

```js
const doSomething = (p1, p2, p3) => {
    // first line
    // second line
    // ...
};
```

## Multiple Lines + Single Parameter

```js
const doSomething = function(p1) {
    // first line
    // second line
    // ...
};
```

arrow version

```js
const doSomething = (p1) => {
    // first line
    // second line
    // ...
};
```

with a single parameter the parenthesis can be omitted

```js
const doSomething = p1 => {
    // first line
    // second line
    // ...
};
```

## Single Return Line + Multiple Parameters

```js
const getSomething = function(p1, p2, p3) {
    return 'buldozer';
};
```

arrow version

```js
const getSomething = (p1, p2, p3) => {
    return 'buldozer';
};
```

shorthand: with a single return line the block parenthesis and the `return` word
can be omitted.

```js
const getSomething = (p1, p2, p3) => 'buldozer';
```

## Single Return Line + Single Parameter

```js
const getDouble = function(num) {
    return 2 * num;
};
```

arrow version

```js
const getDouble = (num) => {
    return 2 * num;
};
```

shorthand: as explained before

```js
const getDouble = num => 2 * num;
```
