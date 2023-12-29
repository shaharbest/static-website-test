---
title: "JavaScript Beginners"
date: 2023-12-25T18:18:28+02:00
---

## Clarification

### Even Nisim

```javascript
const nisim = 42;

// is even
alert(nisim % 2 === 0); // true
alert(nisim % 2 !== 1); // true

// is odd
alert(nisim % 2 !== 0); // false
alert(nisim % 2 === 1); // false
```

### Odd Shlomo

```javascript
const shlomo = 23;

// is even
alert(shlomo % 2 === 0); // false
alert(shlomo % 2 !== 1); // false

// is odd
alert(shlomo % 2 !== 0); // true
alert(shlomo % 2 === 1); // true
```

---

### Conditionals

```javascript
const singer = 'Avi Biter';
// const singer = 'Shimi Tavori';
// const singer = 'Elvis Presly';

if (singer === 'Avi Biter') {
    alert('you are a legend!');
    alert('you are a legend!');
}
else if (singer === 'Shimi Tavori') {
    alert('you are OK');
    alert('you are OK');
}
else {
    alert('you are a disgrace!');
    alert('you are a disgrace!');
}

alert('end of program');
```

---

### Absolute

```javascript
alert(Math.abs(42)); // 42
alert(Math.abs(-42)); // 42
```

---

## Exercises

1. Multiply two inserted numbers:

   {{<template>}}
   ```javascript
   const n1 = prompt('insert number 1');
   const n2 = prompt('insert number 2');
   alert(/* you implementation */);
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const n1 = Number(prompt('insert number 1'));
   const n2 = Number(prompt('insert number 2'));
   alert(n1 * n2);
   ```
   {{</solution>}}

2. Print:
   * `true` if number is even.
   * `false` if number is odd.

   {{<template>}}
   ```javascript
   const num = prompt('insert number');
   alert(/* you implementation */);
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const num = Number(prompt('insert number'));
   alert(num % 2 === 0);
   ```
   {{</solution>}}

3. Grade is the value of `0` - `100`

   * if above 80 print 'success'
   * if above 60 print 'mediocre'
   * below 60 print 'you have no hope'

   {{<template>}}
   ```javascript
   const num = prompt('insert grade');

   // implement conditionals
   alert('success');
   alert('mediocre');
   alert('you have no hope');
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const num = Number(prompt('insert grade'));

   if (num > 80) {
	   alert('success');
   }
   else if (num > 60) {
	   alert('mediocre');
   }
   else {
	   alert('you have no hope');
   }
   ```
   {{</solution>}}

4. Convert temps from Celsius to Fahrenheit.

   ```txt
   F = 1.8 * C + 32
   ```

   Examples:

   * 60°C is 140 °F
   * 45°F is 7.222222222222222°C

   {{<template>}}
   ```javascript
   const num = prompt('insert celsius');
   alert(/* you implementation */); // it's ? in farenfeit
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const num = Number(prompt('insert celsius'));
   alert(1.8 * num + 32);
   ```
   {{</solution>}}

5. Get the difference between a number and 13
   if the number is greater than 13 return double
   the absolute difference.

   {{<template>}}
   ```javascript
   const num = prompt('insert number');
   alert(/* you implementation */);
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const num = Number(prompt('insert number'));

   if (num < 13) {
       alert(13 - num);
   }
   else {
       alert(2 * (num - 13));
   }
   ```
   {{</solution>}}

6. Compute the sum of the two given integers.

   * If the two values are the same, then print triple their sum.
   * Else print double of their sum.

   {{<template>}}
   ```javascript
   const n1 = prompt('insert number 1');
   const n2 = prompt('insert number 2');
   alert(/* you implementation */);
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const n1 = Number(prompt('insert number 1'));
   const n2 = Number(prompt('insert number 2'));

   const sum = n1 + n2;

   if (n1 === n2) {
	   alert(3 * sum);
   }
   else {
	   alert(2 * sum);
   }
   ```
   {{</solution>}}

7. Absolute Difference

   * if the specified number is greater than 19 -
     print triple the absolute difference.
   * else - print double the absolute difference.

   {{<template>}}
   ```javascript
   const num = prompt('insert number 1');
   alert(/* you implementation */);
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const num = Number(prompt('insert number 1'));

   if (num > 19) {
   	alert(3 * (num - 19));
   }
   else {
   	alert(2 * (19 - num));
   }
   ```
   {{</solution>}}

8. Check a pair of numbers and return `true` if one of the
   numbers is `50` or if their sum is `50`. otherwise alert `false`.

   {{<template>}}
   ```javascript
   const n1 = prompt('insert number 1');
   const n2 = prompt('insert number 2');
   alert(/* you implementation */);
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const n1 = Number(prompt('insert number 1'));
   const n2 = Number(prompt('insert number 2'));
   alert(n1 === 50 || n2 === 50 || n1 + n2 === 50);
   ```
   {{</solution>}}

9. alert `true` if a given number is in the range of `20`-`100` or equal to `400`.

   {{<template>}}
   ```javascript
   const num = prompt('insert number');
   alert(/* you implementation */);
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const num = Number(prompt('insert number'));
   alert((20 < num && num < 100) || num === 400);
   ```
   {{</solution>}}

1. Check two given numbers whether one is positive and the other negative.

   {{<template>}}
   ```javascript
   const n1 = prompt('insert number 1');
   const n2 = prompt('insert number 2');
   alert(/* you implementation */);
   ```
   {{</template>}}

   {{<solution>}}
   ```javascript
   const n1 = Number(prompt('insert number 1'));
   const n2 = Number(prompt('insert number 2'));
   alert((n1 > 0 && n2 < 0) || (n1 < 0 && n2 > 0));
   ```
   {{</solution>}}
