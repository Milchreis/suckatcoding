---
title: "Using custom emitted events in VueJS" 
description: Until now $emit and $on was standard, but now the world has changed ...
img: https://images.unsplash.com/photo-1526367790999-0150786686a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80
alt: deliver image
author: 
  name: Nick
  bio: I am a software developer who spends most of his spare time working on open source projects. I also like taking pictures and playing table football.
  img: https://avatars1.githubusercontent.com/u/544436?s=460&u=f229b588fbb1b79aab2ab6f029cec5e6e7909af1&v=4
tags: 
  - Javascript
createdAt: 2020-12-08
updatedAt: 2020-12-08
---

## ⚡ Using custom emitted events in VueJS

VueJS is Javascript frontend library which makes my happy in my daily workflow. It's easy to understand
and is supported by many modules and libraries - especially NuxtJS. The downside: is a library intuitive you will don't read the (whole) documentation. And this is exactly what happened to me.

I recommend to read [this page](https://vuejs.org/v2/guide/components-custom-events.html), but on short:

```javascript
// do this in your child component (f.e. named mycomponent)
this.$emit('myevent')

// and this in the parent component
<mycomponent @myevent="someOtherFunction" />
```

Typically I catch emit events with the $on(...) function, but it's not necessary. You can catch your custom-event as well as a click event on your component in the html.