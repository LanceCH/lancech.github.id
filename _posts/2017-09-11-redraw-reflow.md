---
layout: post
title:  "重绘和重排"
date:   2017-09-11 16:44:05
categories: Markdown
author: Lance
tags:  css
---

* content
{:toc}

## 前言
首先，我们来了解下重绘和重排的概念。

重绘：是元素外观变化引起的浏览器行为，如背景色改变，visibility改变

重排：引起DOM树重新计算的行为

重绘也就是重新绘制，当你改变了元素的外观属性的时候，比如说改变visibility、outline、背景色等，都会导致浏览器重新根据元素的新属性进行绘制，但是这个过程不涉及到重排，性能消耗少。

重排则是一种比较消耗性能的浏览器行为，浏览器会根据新属性进行重新布局排列

***




## 引发重排的原因
1. 删除或添加某些DOM节点
2. 元素的位置的改变
3. 元素的尺寸大小改变（margin padding border height width等）
4. 页面渲染初始化
5. 浏览器窗口尺寸改变
6. 获取某些属性（offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight）

***

## 为了尽量避免重排带来的性能影响，我们可以采取以下措施：
1. 尽量减少dom操作
2. 将多次重排的元素，先脱离文档流再修改，比如将元素的position属性设为absolute或fixed
3. 将需要重排的元素先设置为display：none，这样是因为display属性为none的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排，然后修改完再显示，这样只会触发两次重排
4. 在需要经常获取那些引起浏览器重排的属性值时，要缓存到变量