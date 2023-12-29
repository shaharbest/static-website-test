---
title: "Aggregate Functions"
date: 2023-11-27T12:25:45-05:00
---

* SUM
* AVG
* MAX
* MIN
* COUNT

```sql
SELECT e.FIRST_NAME, e.SALARY
FROM employees AS e;
```

| FIRST_NAME | SALARY |
|:----------:|:------:|
| nisim      | 100    |
| shlomo     | 300    |
| david      | 200    |

```sql
SELECT SUM(e.SALARY)
FROM employees AS e;
```

| SUM(e.SALARY) | SALARY |
|:----------:|:------:|
| nisim      | 100    |
| shlomo     | 300    |
| david      | 200    |

COUNT
  *
  DISTINCT

# GROUP BY Clause

ORDER BY

HAVING
