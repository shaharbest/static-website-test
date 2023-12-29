---
title: "More HTML"
tags: [html]
date: 2023-08-20T15:06:36-04:00
---

# Images

{{< figure src="img/chad.jpg" title="chad.jpg" >}}

{{< figure src="img/chad.png" title="chad.png" >}}

# Image Element

```html
<img src="https://shaharbest.com/chad1.jpg" alt="chad1">
<img src="https://shaharbest.com/chad2.png" alt="chad2">

<img src="chad1.jpg" alt="chad1">
<img src="chad2.png" alt="chad2">
```

# Common Formats

* jpg
* jpeg
* png
* svg
* gif
* webp

# Link

```html
<a href="https://shaharbest.com">shahar</a>
```

# Open Link In New Tab

`target="_blank"` Opens the page in a new window/tab
 
```html
<a href="..." target="_blank">my link</a>
```

# Image Which Is A Link

```html
<a href="https://shaharbest.com">
	<img src="chad1.jpg" alt="chad1">
</a>
```

# Terms List

* Element
* Tag
* Openning Tag
* Closing Tag
* Attribute
* Attribute Value
* Element Content

# Comments
```html
<!-- Write your comments here -->

<!--
<p>Look at this cool image:</p>
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
```

# Image Size

## recommanded
```html
<img src="pic.jpg" style="width:500px;height:600px;">
```

## not recommanded
```html
<img src="pic.jpg" width="500" height="600">
```

# HTML Character Entities

```html
<p>I will display &euro;</p>
<p>I will display &#8364;</p>
<p>I will display &#x20AC;</p>
```

```
I will display €
I will display €
I will display €
```