// 1. Why do we need to `import React from "react"` in our files?
// Otherwise React is not useable. Once it is imported, the same code that looks like HTML is treated like JSX.

// 2. If I were to console.log(page) in index.js, what would show up?
// X [object Object]
// A JavaScript object. React elements that describe what React should eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// Not grouped into single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative uses shorthand, Imperative is explicit

// 5. What does it mean for something to be "composable"?
// It can be broken down into smaller parts and assembled
