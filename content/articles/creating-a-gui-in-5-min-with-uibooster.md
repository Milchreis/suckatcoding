---
title: "Creating a GUI in 5 minutes with UiBooster" 
description: Don't struggle with GUI programming in Java - use UiBooster for easy dialogs
img: https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
alt: rocket image
author: 
  name: Nick
  bio: I started developing UiBooster in 2019 as side project, because I missing something like that in Java
  img: https://avatars1.githubusercontent.com/u/544436?s=460&u=f229b588fbb1b79aab2ab6f029cec5e6e7909af1&v=4
tags: 
  - Java
createdAt: 2021-02-12
updatedAt: 2021-02-12
---

## 🚀 Creating a GUI in 5 minutes with UiBooster

UiBooster is a lean library to create fast and easy dialogs for utility tools. It equips your applications blazing fast with GUI components to increase the comfort for your users.

It's based on Java swing components to run on current JREs without any struggle. This library encapsulates the long and sometimes complicated GUI code and leaves more clarity in your project.

I decided in 2019 to create this project, because I missed something like [zenity](https://de.wikipedia.org/wiki/Zenity)  for my Java applications. It started with a some basic input dialogs, but today I proudly release version 1.10.0 with a lot of new features.

### Example form

The most powerful element of UiBooster is the `form` element. It provides a lot of components which can be use with only one line of code. Moreover the form can be equipped with custom elements, if you need something special.

![screenshot gallery dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/form.jpg?raw=true)

```java
UiBooster booster = new UiBooster();
FilledForm form = booster.createForm("Personal information")
            .addText("Whats your first name?")
            .addTextArea("Tell me something about you")
            .addSelection(
                    "Whats your favorite movie?",
                    Arrays.asList("Pulp Fiction", "Bambi", "The Godfather", "Hangover"))
            .addLabel("Choose an action")
            .addButton("half full", () -> booster.showInfoDialog("Optimist"))
            .addButton("half empty", () -> booster.showInfoDialog("Pessimist"))
            .addSlider("How many liters did you drink today?", 0, 5, 1, 5, 1)
            .show();
```

Moreover you have to add the following JitPack-Repository and the dependency to you Maven `pom.xml`

```xml
<repositories>
  <repository>
      <id>jitpack.io</id>
      <url>https://jitpack.io</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
      <groupId>com.github.Milchreis</groupId>
      <artifactId>UiBooster</artifactId>
      <version>1.10.0</version>
  </dependency>
</dependencies>
```

If you interested to learn more about UiBooster, look at the [GitHub page](https://github.com/Milchreis/UiBooster) to see all components and dialogs.

![screenshot warn dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/warn.jpg?raw=true)
> A simple warn dialog

![screenshot confirm dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/confirm.jpg?raw=true)
> A simple confirm dialog

![screenshot multiple selection dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/multiselection.jpg?raw=true)
> A multiple selection with text input for filtering

![screenshot color dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/color.jpg?raw=true)
> A basic color picker

![screenshot datepicker](https://github.com/Milchreis/UiBooster/blob/master/screenshots/dateselection.jpg?raw=true)
> A basic date picker

![screenshot exception dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/exception.jpg?raw=true)
> A dialog window for presenting an exception stacktrace

![screenshot list dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/list.jpg?raw=true)
> A list dialog with optional image and subtitle

![screenshot table dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/table.jpg?raw=true)
> A table dialog with readable and writeable data

![screenshot gallery dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/tray.jpg?raw=true)
> System tray menus are possible, too

![screenshot gallery dialog](https://github.com/Milchreis/UiBooster/blob/master/screenshots/notification.jpg?raw=true)
> Starting a notification in one line of code

