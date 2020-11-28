---
title: "Log variable name and value: the short way"
description: There is a comfortable short way to log a variable name and value in JS
img: https://images.unsplash.com/photo-1542577195-d562c6698ff3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dHVubmVsfGVufDB8fDB8&auto=format&fit=crop&w=600&q=60
alt: tunnel image
author: 
  name: Nick
  bio: I am a software developer who spends most of his spare time working on open source projects. I also like taking pictures and playing table football.
  img: https://avatars1.githubusercontent.com/u/544436?s=460&u=f229b588fbb1b79aab2ab6f029cec5e6e7909af1&v=4
tags: 
  - JavaScript
createdAt: 2020-11-28
---

## Log variable name and value: the short way

I found a very interesting article on [css-tricks.com](https://css-tricks.com/console-log-myvariable/) to log a variable in JS console.

 ```javascript
// my old-fashioned way
console.log("myVariable: ", myVariable);

// the much cooler way 😎
console.log({ myVariable });
 ```

This works because the shorthand assignment for objects expects the variable name is equal to the object key.
In JS the example is interpreted as:

```javascript
{ 
  "myVariable": myVariable
}
```
