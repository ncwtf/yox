# York

轻量、好用、简单的 MVVM 框架。

> 你懂的，命名很难，偶尔想到纽约，于是 new York() ^_^

## 特性

* 超轻量，压缩版只有 **56KB**（React：145KB，Vue：62KB，Avalon：93KB）
* 提供对低端浏览器的扩展支持，理论上支持任何浏览器（默认 IE9+）
* 提供 Mustache 风格的模板引擎
* 提供面向指令的扩展机制
* 基于 [Snabbdom](https://github.com/snabbdom/snabbdom) 实现的 Virtual DOM
* 简单！简单！它真的非常简单！

## Why

在前端框架泛滥的今天，选择再造一个轮子是需要勇气的。

一方面，React 和 Vue 已经非常流行，流行到我身边不断有人在尝试此类框架，并且确实带来非常大的生产力提升。

另一方面，我却发现选择一个框架是很纠结的，比如项目希望支持 IE8，这样 Vue 就出局了。选 React 这样一个开发风格迥异的框架非常考验团队成员的能力，从项目长期可维护的角度来看，也是值得商榷的。

两大框架出局，剩下的还有 Angular 和 Avalon。自 Angular 宣布断崖式升级以来，它的地位变得非常尴尬，因此也不在我们的考虑范围。Avalon 是一个国产领衔框架，在国内获得了非常大的成功，但是我对它的设计非常无爱，很多无谓的新概念让它的学习成本莫名其妙的升高了。

在我茫然之际，发现了 Ractive，它的 API 跟 Vue 比较类似，但是比 Vue 简单易学，文档写的很好，重点是支持 IE8，因此在公司内部积极推广。

但是，Ractive 并非完美，它自身也有不少问题，比如体积过大（压缩版 200KB+），代码不够健壮，虽然整体已经设计的非常易用，某些部分还是明显不如 Vue。

基于以上几个因素，我想尝试造一个新轮子，它既能支持低端浏览器，也能很好的适应移动端，它能驱动各种类型的项目，因此在公司层面统一 MVVM 框架成为了可能。

## 感谢

感谢来自 [Vue](http://vuejs.org) 和 [Ractive](http://www.ractivejs.org/) 的灵感。