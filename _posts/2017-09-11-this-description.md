---
layout: post
title:  "关于this"
date:   2017-09-11 10:44:05
categories: Markdown
author: Lance
tags:  javascript
---

* content
{:toc}

## 前言
想必一些初学者会对this的指向比较头疼，我在一开始学习javascript的时候也是对这些知识懵懵懂懂，现在让我们尝试着来解开this指向之谜。

***




## 认识this指向
this的运用场景有以下几个：
1. 函数调用
2. 对象的方法调用
3. 构造函数调用
4. call和apply调用

让我们一个一个来谈

***

## 一、函数调用
这是经常见的一种例子，见下方：
```md
    window.word = "this is global";
    function aa(){   
        console.log(this.word)
    }
    function bb(){
       var word = "this is bb"
        aa();
    }
    bb();
```
运算结果是 this is global。

可以看到当作为函数调用的时候，this指向的是window对象。

***

## 二、对象方法调用
```md
    var car = {
        name : "BMW",
        price : "200000",
        showName:function(){
            console.log(this.name);
        },
        showPrice:function(){
            console.log(this.price)
        }
    }
    car.showName();
    car.showPrice();
```
运算结果是：BMW 200000。

可以看到 当作为对象方法调用的时候 this指向的是car本身。

***

## 三、构造函数调用
构造函数和普通函数一模一样，区别在于调用方式，当用new运算符调用时，函数会返回一个对象，而构造器的this就指向了这个返回对象
```md
    function Car(){
        this.name = "BMW";
        this.price = "200000";
        this.showPrice = function(){
            console.log(this.price);
        }
    }
    var car = new Car();
    car.showPrice();
```
运算结果是 200000。

由此可知，这里的this指向的是car这个对象。

***

## 四、call和apply
```md
    function Car(){
        console.log(this.name);
    }
    var bmw = {
        name:"BMW",
        showName:function(){
            Car.apply(this);
        }
    }
    bmw.showName();
```
运算后得到：BMW 。

这里通过apply（call也可以）强制把this指向了bmw这个对象。

***