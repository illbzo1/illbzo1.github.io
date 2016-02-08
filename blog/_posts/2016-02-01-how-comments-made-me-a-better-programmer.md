---
layout: post
comments: true
title: "How Comments Made Me A Better Programmer"
date: 2016-02-01
redirect_from: blog/other/2016/02/01/how-comments-made-me-a-better-programmer.html
categories: [programming]
desc: Programming started making a lot more sense to me once I started using comments to map out how the program should work.
---

One of the biggest hurdles I’ve faced when learning to program is how to transition from tutorials to writing my own code. I think it’s a common problem for anyone who’s new to programming, even though I'm not exactly new to programming. I can read existing code, figure out what it does, and change it to do something different. But writing code from scratch remains a weak point. Hence JavaScript January! Now known as JavaScript February. It lacks that satisfying alliteration, but we're closing in on Groundhog Day and I'm still messing around with JavaScript.

I’ve found modifying the steps of a tutorial as I go to be helpful, though not very sticky. For example, if a program redirects a user to a thank you page after completing a sign up action, I could instead redirect them to their new account page. A flash message could appear, with the thank you message and a helpful next step.

I’m big into user experience, and this idea cuts out a step from the new user funnel. It’s more useful to send a new user to their account page after signing up, rather than a “Thanks for signing up!” page.

A page on how to get started using the app or service might be better than a simple account details redirect, but it’s a step up from a generic thank you page. A "Thanks for signing up!" page doesn't add value to a user. It adds value to the people who own the program, because a static page is easy to track as the end step in a conversion.

Modifying a tutorial is a good way to think about extending functionality, but not a great way to understand how the code works, or how to describe solving a problem.

I think open ended exercises are a good follow up to a tutorial. I finished up *JavaScript and jQuery* by Jon Duckett in January, and now I’m working through the [W3 JavaScript exercises](https://github.com/illbzo1/w3-javascript-exercises). My rules are as follows:

**1) I don’t look at the answer until I’ve built a working solution.**

**2) When practical, I’ll change or extend the original exercise.**

**3) Hey, have fun!**

I’m still early on (as you can see by [my progress on GitHub](https://github.com/illbzo1/w3-javascript-exercises)) but something clicked while I started working through these exercises, and it’s made learning JavaScript a lot more fun.

I’m not a big fan of inline comments. Generally speaking, code should be readable enough for someone else to figure out what it does without relying on comments. Functionality and features to add later should live in a TODO.

But I've started using comments to describe how I think a program or script should function, before writing any code. It’s not quite pseudo-code, but more of a task list or an outline. I write out the steps of the program as I understand them, along with any obvious pitfalls.

Here’s an example, from a JavaScript program I worked on this past weekend:

<pre>
<code>
// Write a JavaScript program to find the area of a triangle
// where lengths of the three of its sides are 5, 6, 7.

// get input from user (height, width, length)
// user clicks button
// if there are three values greater than 0
// and the values aren’t impossible
// program does the math
// program outputs the result and notifies user
// else program throws a user-visible error

function triangleArea() {

}
</code>
</pre>

The original exercise asks to calculate the area of a triangle with sides of length 5, 6, and 7. I’ve modified this for a couple of reasons. First, this isn't much of a program. The most performant answer would be to simply do the math before hand, and print the result (14.6969). Not exactly in line with the spirit of the exercise, but the original is a pretty lousy program!

Second, the original exercise doesn’t rely on user input. I’m interested in learning more about JavaScript, not because I’m super in love with JavaScript as a language itself (though I am enjoying it more than I thought I would) but because it’s the language of the web. What would make this program more useful to someone who might actually want to use it? What features would it have?

I’ve also mapped out a couple of obvious problems. I can’t expect users to always input valid numbers, so I’ll need to guard against values less than or equal to zero. Further, triangles have some fundamental rules. You can’t have a triangle with sides of length 2, 2, and 50, for example. So while I'm at it, I'll protect against impossible values, as well as non-positive values.

At this stage, I’m not 100% on how I’ll guard against bad input. This program is starting to feel a lot like a form, so form field validation could be a good solution. It's enough to throw a warning if the field contains a value I don’t expect. All that's left is some math.

Luckily, I can use <a href="http://mathworld.wolfram.com/HeronsFormula.html">Heron’s Formula</a> to calculate the area of a triangle, given three lengths, and the <a href="http://www.mathopenref.com/triangleinequality.html">Triangle Inequality Theorem</a> to determine if three given lengths COULD comprise a triangle.

Now that I’ve got some ground rules in place for the problem I’m trying to solve, it’s just a matter of going through the steps, solving each part of the problem, and testing to make sure it works for a variety of inputs.

Here’s the working solution I came up with:
<hr />
<p>JavaScript Program to Calculate Area of a Triangle, Given Lengths of 3 Sides</p>
<form onsubmit="triangleArea()">
Length of side 1:
<br />
<br />
<input id="side1" type="text">
Length of side 2:
<br />
<br />
<input id="side2" type="text">
Length of side 3:
<br />
<br />
<input id="side3" type="text">
<input type="submit">
</form>
<script src="/js/triangle-area.js"></script>
<hr />

I’ve used JavaScript for years. I've installed tracking scripts, modified Google Analytics to send custom data, and used HighCharts to pump out rad graphs - all without a basic understanding of how the language works. Understanding JavaScript is what JavaScript January is all about, and I have a feeling it'll stretch into JavaScript February and JavaScript March. I want to play around with Unity game development at some point, but for now, I'm having a ton of fun.

Using comments to map out the steps the program will need to take makes it easier to write the program later. For years, I thought programming meant you memorized every aspect of a language. It seemed impossibly hard!

But you don’t have to know everything. You just have to know how to describe the problem you’re trying to solve, break it up into manageable steps, and then complete those steps.

I don’t sit down to write a story without having some idea of what will happen in the story. It’s the same with programming. It’s why whiteboards exist.

Programming is problem solving. You have to solve the problem yourself first, and then tell the computer how to solve it.