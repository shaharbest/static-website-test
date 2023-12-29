---
title: "Use Reducer Hook"
date: 2023-08-17T17:04:28+03:00
tags: [react]
description: "Use Reducer Hook In React"
---

It can be very annoying to manage component states
with the `useState` hook alone.

```jsx
function Counter() {
	const [count, setCount] = useState(0);

    function handleIncrement() { setCount(count + 1); }
    function handleDecrement() { setCount(count - 1); }
    function handleReset() { setCount(0); }

	return <>
		<span>{count}</span>
		<button onClick={handleIncrement}>+</button>
		<button onClick={handleDecrement}>-</button>
		<button onClick={handleReset}>Reset</button>
	</>;
}
```

# The Reducer Function

A way to cetralize the state management is to use the Reducer function.  This
function receive an action and a state and return a new state.  The reducer is a
pure function. That means that it should not have any side effects. That means
it should not change the state directly but return a new state.

For a simple demo let's define the state's data structure and the initial state:

```jsx
const initialState = { value: 0 };
```

Let's define a reducer just for the increment action:

```jsx
function reducer(state, action) {
	if (action.type === 'increment') return { value: state.value + 1 };
	return state;
}
```

In order to use the reducer in react
we need to import the `useReducer` hook:

```jsx
import { useReducer } from "react";
```

Then we will use it:

```jsx
function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <>
		<span>{count}</span>
		<button onClick={() => dispatch({ type: 'increment' })}>
			+
		</button>
	</>;
}
```

Let's add the decrement action:

```jsx
function reducer(state, action) {
    if (action.type === 'increment') return { value: state.value + 1 };
    if (action.type === 'decrement') return { value: state.value - 1 };
    return state;
}

function Counter() {
	const [count, dispatch] = useReducer(reducer, 0);

	return <>
		<span>{count}</span>
		<button onClick={() => dispatch({ type: 'increment' })}>
			+
		</button>
		<button onClick={() => dispatch({ type: 'decrement' })}>
			-
		</button>
	</>;
}
```

And the reset action is going to be easier:

```jsx
function reducer(count, action) {
    if (action.type === 'increment') return { value: state.value + 1 };
    if (action.type === 'decrement') return { value: state.value - 1 };
    if (action.type === 'reset') return initialState;
    return state;
}

function Counter() {
	const [count, dispatch] = useReducer(reducer, 0);

	return <>
		<span>{count}</span>
		<button onClick={() => dispatch({ type: 'increment' })}>
			+
		</button>
		<button onClick={() => dispatch({ type: 'decrement' })}>
			-
		</button>
		<button onClick={() => dispatch({ type: 'reset' })}>
			reset
		</button>
	</>;
}
```

There are many times when it's not only the action type that determines the new state.
For example, when we want to increment the count by a given amount.
In this case we need to pass the amount as a payload in the action object.

```jsx
function reducer(count, action) {
	if (action.type === 'increment') return count + 1;
	if (action.type === 'decrement') return count - 1;
	if (action.type === 'reset') return 0;
	if (action.type === 'change-count') {
		return count + action.payload.amount;
	}
	return count;
}
```

```jsx
return <>
	<span>{count}</span>
	<button onClick={() => dispatch({ type: 'increment' })}>
		+
	</button>
	<button onClick={() => dispatch({ type: 'decrement' })}>
		-
	</button>
	<button onClick={() => dispatch({ type: 'reset' })}>
		reset
	</button>
	<button onClick={() => dispatch({
		type: 'change-count',
		payload: { amount: 5 }
	})}>
		increment by 5
	</button>
</>;
```

writing strings is annoying and prone to errors

Soloution: constants!

```javascript
const ACTIONS = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
	RESET: "reset",
	CHANGE_COUNT: "change-count",
}
```

# Edit Our Reducer

```javascript
function reducer(count, action) {
	if (action.type === ACTIONS.INCREMENT) return count + 1;
	if (action.type === ACTIONS.DECREMENT) return count - 1;
	if (action.type === ACTIONS.RESET) return 0;
	if (action.type === ACTIONS.CHANGE_COUNT) {
		return count + action.payload.amount;
	}
	return count;
}
```

# Edit Our Component

```jsx
return <>
	<span>{count}</span>
	<button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
		+
	</button>
	<button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
		-
	</button>
	<button onClick={() => dispatch({ type: ACTIONS.RESET })}>
		reset
	</button>
	<button onClick={() => dispatch({ type: ACTIONS.CHANGE_COUNT,
		payload: { amount: 5 }
	})}>increment by 5</button>
</>;
```
