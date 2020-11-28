---
title: Relative time in JavaScript
description: Convert a date relative to your current time
img: https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
alt: sand clock image
author: 
  name: Nick
  bio: I am a software developer who spends most of his spare time working on open source projects. I also like taking pictures and playing table football.
  img: https://avatars1.githubusercontent.com/u/544436?s=460&u=f229b588fbb1b79aab2ab6f029cec5e6e7909af1&v=4
tags: 
  - JavaScript
createdAt: 2020-11-22
---

## ⏳ Relative time in JavaScript

Turn you date into a user friendly relative temporal definition:

 ```javascript
const now = new Date()                                     // '2020-11-16 14:00'
const relative = formatRelativeTime('2020-11-19 12:00:00') // 'in 3 days'
 ```

This function uses the [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) and some pre-calculations to choose a suitable unit.

```javascript
function formatRelativeTime(date, reference = new Date(), language = navigator.language) {
  if (!date) return ''

  date = new Date(date)
  let delta = Math.round((date - reference) / 1000),
      deltaInUnit = delta,
      unit = 'second'

  const units = [
      { unit: 60, name: 'minute' },
      { unit: 60 * 60, name: 'hour' },
      { unit: 60 * 60 * 24, name: 'day' },
      { unit: 60 * 60 * 24 * 7, name: 'week' },
      { unit: 60 * 60 * 24 * 30, name: 'month' },
      { unit: 60 * 60 * 24 * 400, name: 'year' }
  ]

  for (let u of units) {
      if (Math.abs(delta) > u.unit) {
          deltaInUnit = delta / u.unit
          unit = u.name
      }
  }

  return new Intl.RelativeTimeFormat(language, {
      style: 'long',
      numeric: 'auto',
  }).format(deltaInUnit.toFixed(0), unit)
}
```
[Browser support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat#Browser_compatibility)
