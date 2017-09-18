---
layout: post
title:  "call和apply的区别"
date:   2017-09-11 12:40:05
categories: Markdown
author: Lance
tags:  javascript
---

* content
{:toc}

## 前言
上一篇说到this的指向问题，结尾部分讲到了apply和call。这里估计大部分新手可能对call和apply不太熟悉，本文就来讲解一下二者的区别。

***





## 首先，他们是相同的。
apply和call都是有着调用函数的作用，并且能把this的指向改变。这点上一篇博客已经阐述过了，这里不再多说。
其次，他们是不同的

***

## 其次，他们是不同的
apply和call的不同之处就在于他们接受的参数不一样。
```md
    function Car(name,price){
        this.name =name;
        this.price=price;
        console.log(this)
    }
    function BMW(name,price,type){
        Car.apply(this,arguments);

    }
    var bmw = new BMW("bmw","200000","BMW");
```

分析 这里的参数arguments是指["bmw","200000","BMW"]，就是将BMW这个函数的参数列表当成一个数组来传。

而如果改用call的话，则应改写成这样：
```md
    function Car(name,price){
        this.name =name;
        this.price=price;
        console.log(this)
    }
    function BMW(name,price,type){
        Car.call(this,name,price);

    }
    var bmw = new BMW("bmw","200000","BMW");
```

这里就可以很清晰的看到二者调用函数时的对比了。

***
