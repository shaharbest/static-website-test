---
title: "Class"
date: 2023-11-01T10:55:50-04:00
---

```javascript {linenos=true}
const people = [
	{
		name: 'nisim',
		greet: function() {
			console.log('hi! my name is', this.name);
		}
	},
	{
		name: 'shlomo',
		greet: function() {
			console.log('hi! my name is', this.name);
		}
	},
	{
		name: 'david',
		greet: function() {
			console.log('hi! my name is', this.name);
		}
	},
]

people.forEach(p => p.greet());
// output:
// "hi! my name is nisim"
// "hi! my name is shlomo"
// "hi! my name is david"
```

This code is not "DRY" at all!
Let's see how the use of `class` can help us:

```javascript {linenos=true}
class Person {
	constructor(_name) {
		this.name = fname;
	}

	greet() {
		console.log('hi! my name is', this.name);
	}
}

const people = [
	new Person('nisim'),
	new Person('shlomo'),
	new Person('david'),
];

people.forEach(p => p.greet());
```

## Inheritance

reserved words:

* `extends`
* `super`

The following js program doesn't use inheritance to define the classes:
`Person` and `Student`.

```javascript {linenos=true}
class Person {
	constructor(_name) {
		this.name = _name;
	}

	greet() {
		console.log('hi! my name is', this.name);
	}
}

class Student {
	constructor(_name, _grade) {
		this.name = _name;
		this.grade = _grade;
	}

	greet() {
		console.log('hi! my name is', this.name,
			'and my grade is', this.grade);
	}
}

const people = [
	new Person('nisim'),
	new Person('shlomo'),
	new Student('david', 95),
];

people.forEach(p => p.greet());
// output:
// "hi! my name is nisim"
// "hi! my name is shlomo"
// "hi! my name is david and my grade is 95"
```

The following will use inheritance

```javascript {linenos=true}
class Person {
	constructor(_name) {
		this.name = _name;
	}

	greet() {
		console.log('hi! my name is', this.name);
	}
}

class Student extends Person {
	constructor(_name, _grade) {
		super(_name);
		this.grade = _grade;
	}

	greet() {
		console.log('hi! my name is', this.name,
			'and my grade is', this.grade);
	}
}

const people = [
	new Person('nisim'),
	new Person('shlomo'),
	new Student('david', 95),
];

people.forEach(p => p.greet());
// output:
// "hi! my name is nisim"
// "hi! my name is shlomo"
// "hi! my name is david and my grade is 95"
```

## Exercise

Define the following classes:

1. `Square` with the proprty: `height` and the method
2. `Rectangle` with the properties `height` and `width`.

```javascript {linenos=true}
// define classes here

const s1 = new Square(4);
const r1 = new Rectangle(6, 3)

console.log(s1.getHeight()); // output: 4
console.log(r1.getHeight()); // output: 6

console.log(s1.getArea()); // output: 16
console.log(r1.getArea()); // output: 18
```

## Solution

```javascript {linenos=true}
class Square {
	constructor(_height) {
		this.height = _height;
	}

	getHeight() {
		return this.height;
	}

	getArea() {
		return this.height ** 2;
	}
}

class Rectangle extends Square {
	constructor(_height, _width) {
		super(_height);
		this.width = _width;
	}

	getArea() {
		return this.height * this.width;
	}
}
```
