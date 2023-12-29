---
title: "For Loop 2"
date: 2023-12-27T21:48:44+02:00
---

Create a for loop that prints the following:

{{<template>}}
```javascript
for (let i = 0; i < pita; i++) {
	console.log(i);
}
```
{{</template>}}

1.
   ```txt
   1, 2, 4, 8, 16
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(2 ** i);
   }
   ```
   {{</solution>}}

2.
   ```txt
   10, 20, 30, 40, 50
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log((i + 1) * 10);
   }
   ```
   {{</solution>}}

3.
   ```txt
   2, 4, 8, 16, 32
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(2 ** (i + 1));
   }
   ```
   {{</solution>}}

4.
   ```txt
   1, 3, 5, 7, 9
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(2 * i + 1);
   }
   ```
   {{</solution>}}

5.
   ```txt
   3, 6, 9, 12, 15
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log((i + 1) * 3);
   }
   ```
   {{</solution>}}
