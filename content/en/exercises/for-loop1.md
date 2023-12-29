---
title: "For Loop 1"
date: 2023-12-27T21:24:33+02:00
---

{{<template>}}
```javascript
for (let i = 0; i < pita; i++) {
	console.log(i);
}
```
{{</template>}}

create "for loop" that prints the following:

1.
   ```txt
   0, 1, 2, 3, 4, 5, 6, 7, 9
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 10; i++) {
   	console.log(i);
   }
   ```
   {{</solution>}}

2.
   ```txt
   1, 2, 3, 4, 5
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
   	console.log(i + 1);
   }
   ```
   {{</solution>}}

3.
   ```txt
   -1, 0, 1, 2, 3
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
   	console.log(i - 1);
   }
   ```
   {{</solution>}}

4.
   ```txt
   0, 2, 4, 6, 8
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
   	console.log(i * 2);
   }
   ```
   {{</solution>}}

5.
   ```txt
   0, 3, 6, 9, 12
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
   	console.log(i * 3);
   }
   ```
   {{</solution>}}

6.
   ```txt
   0 Avi Biter, 1 Avi Biter, 2 Avi Biter, 3 Avi Biter, 4 Avi Biter
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
   	console.log(i, 'Avi Biter');
   }
   ```
   {{</solution>}}

7.
   ```txt
   4, 3, 2, 1, 0
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
   	console.log(4 - i);
   }
   ```
   {{</solution>}}

8.
   ```txt
   8, 6, 4, 2, 0
   ```

   {{<solution>}}
   ```javascript
   for (let i = 0; i < 5; i++) {
   	console.log(2 * (4 - i));
   }
   ```
   {{</solution>}}
