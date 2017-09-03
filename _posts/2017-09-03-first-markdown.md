---
layout: post
title:  "第一个Markdown文件"
date:   2017-09-03 16:44:05
categories: Markdown
author: Lance
tags:  Markdown
---

* content
{:toc}

## 搭建站点

在慕课网看到可以用github搭建自己的站点之后，就试着来搭建了一个。

博客主题采用github上的一个大神[gaohaoyang](https://github.com/Gaohaoyang)。

***




## Markdown语法练习

**标题**

>行首插入1到六个`#`，代表h1-h6。


**效果**

### 三级标题


**代码**

`### 三级标题`

***

**区块引用**

>使用`>`角括号


**效果**

> 区块引用内容


**代码**

`> 区块引用内容`

***

**强调内容**

>星号标记强调的区段


**效果**

段落中**需要强调的内容**和*斜体内容*等等。


**代码**

`段落中**需要强调的内容**和*斜体内容*等等。`

***

**无序列表**

>使用`*` `-` `+` 表示无序列表


**效果**

- 无序列表项1
- 无序列表项2
- 无序列表项3
- 无序列表项4


**代码**

```md
- 无序列表项1
- 无序列表项2
- 无序列表项3
- 无序列表项4
```

***

**有序列表**

>使用`1.` `2.` `3.` 等数字加点号表示


**效果**

1. 有无序列表项1
2. 有无序列表项2
3. 有无序列表项3
4. 有无序列表项4


**代码**

```md
1. 有无序列表项1
2. 有无序列表项2
3. 有无序列表项3
4. 有无序列表项4
```

***

**项目中插入多项内容**


**效果**

- 无序列表
	内容区域1
	内容区域2
	> 无序列表内的区块引用
	
- 无序列表
	内容区域1
	内容区域2
	> 无序列表内的区块引用


**代码**

```md
- 无序列表
	内容区域1
	内容区域2
	> 无序列表内的区块引用
	
- 无序列表
	内容区域1
	内容区域2
	> 无序列表内的区块引用
```
	
***

**链接**


**效果**

[我的博客](https://lancech.github.io/)


**代码**

`[我的博客](https://lancech.github.io/)`

***


**效果**

`<p>这是一个段落</p>`

	<p>这是一个段落</p>


**代码**

```md
`<p>这是一个段落</p>`

	<p>这是一个段落</p>
```

***

**代码块**


**效果**

```html
	<!DOCTYPE HTML>
	<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>演示例子</title>
	</head>
	<body> 
	</body>
	</html>
```


**代码**

```md
	```html
		<!DOCTYPE HTML>
		<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
			<title>演示例子</title>
		</head>
		<body> 
		</body>
		</html>
	```
```


