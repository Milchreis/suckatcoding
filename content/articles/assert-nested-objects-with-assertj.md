---
title: "Mindblow: Assert nested objects with AssertJ" 
description: Use one assertion to check a deep nested object for specific values
img: https://images.unsplash.com/photo-1508946808231-a34e34e34059?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVlcHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60
alt: sand clock image
author: 
  name: Nick
  bio: I am a software developer who spends most of his spare time working on open source projects. I also like taking pictures and playing table football.
  img: https://avatars1.githubusercontent.com/u/544436?s=460&u=f229b588fbb1b79aab2ab6f029cec5e6e7909af1&v=4
tags: 
  - TDD BDD
  - Java
createdAt: 2020-11-22
---

## 🤯 Assert nested objects with AssertJ

AssertJ is very nice for test-driven-development or commonly testing in Java and today I figured out a mindblowing feature. And to be honest, if I had read the documentation, I would have known it already 😎

```java
class Item {
  // ...
}

class Table {
  int legs;
  String color;
  List<Item> servedItems;

  // ... Ctor, Getter, Setter
}

Table table = new Table(4, "brown", Arrays.asList(new Item(/* ... */), new Item(/* ... */)));

assertThat(table)
    .extracting("color", "servedItems.size")
    .containsExactly("brown", 2);
```

In the example you can see: It's possible to access the item list in table as String in dot notation. 🤯 
Nice job girls and boys from [AssertJ](https://assertj.github.io/doc/)
