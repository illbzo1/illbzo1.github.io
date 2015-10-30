---
layout: post
title: "What Is Good Content Marketing, Anyway?"
date: 2015-10-30
categories: [marketing]
desc: What makes content marketing useful? Helping people solve problems, and being of service to your audience.
---

What comes to mind when you think about content marketing? Blog posts, most likely. Maybe white papers, or infographics, or shitty listicles with click bait headlines.

Most content marketing doesn’t have much in the way of content. It’s filler. It’s an excuse to split a Top 10 article into ten pages, each full of ads, and popups encouraging you to subscribe to more Top 10 articles split across ten pages full of ads.

It probably sounds like I’m down on content marketing, but I’m not. I promise! I'm just down on the most obvious examples of "content marketing." The kind of article that drives clicks using dirty tricks.

I love good, quality content marketing, and the most effective content marketing is educational. It's the kind of blog post, video, ebook or other piece of content that puts “content” first.

If you've got the content right, marketing will take care of itself. Your audience will spread your content, and your message. If you help your audience, your audience will help you accomplish your business goals.

Providing interesting and educational content is something I think about a lot. I like to use this blog as a way of sharpening my writing skills, but I still want to be producing good content.

I’ve been wanting to beef up my programming skills, and recently I ran across the [Ruby Koans](http://rubykoans.com/). A piece of content so good it inspired me to do better. I want to produce content as good and educational as the Ruby Koans.

![The Ruby Koans](/img/ruby-koans.jpg "Learning Ruby with the Ruby Koans")

A fun, programmatic way to learn about Ruby structure, functions, and culture? Talk about a value proposition. Oh, my God. It even has a <em>watermark</em>.

Some background: the Ruby Koans are maintained by [Jim Weirich](https://twitter.com/jimweirich) and the team at [Neo](http://neo.com/). The'yre a series of unit tests that teach Ruby by requiring you to fix failing tests. They were inspired by Mike Clark's post on [learning Ruby through unit testing](https://pragmaticstudio.com/blog/2005/3/18/ruby-learning-test-1-are-you-there-world) way back in 2005, and Ara Howard's [Ruby quiz entry on Meta Koans](http://rubyquiz.com/quiz67.html).

I woke up at 6am this past Saturday, and I figured it was a good time to get started. I couldn’t sleep, so I got up, opened my laptop, and fired up iTerm and Sublime.

About an hour later, I realized the Ruby Koans is the best content marketing I’ve ever seen, and here’s why.

### Content Marketing Should Be Useful

I have a fair understanding of Ruby, but the Koans sharpened my understanding, and made my weak spots easier to identify. I’m pretty good at understanding existing code, and modifying it to do the thing I want it to do.

Where I fall short is writing methods from scratch. I’m not what you’d call a “classically trained” programmer, by any means. Maybe this is a common problem for people. But the Ruby Koans helped me identify this weak spot. I plan to spend some time beefing up my understanding of how to write methods in the future. Describing what I want the method to do using pseudo-code sounds like a good place to start.

### Content Marketing Should Be Memorable

When you run Rake, you get a helpful error message telling you how to fix the most recently failed test. Test driven development is huge in Ruby programming. The Ruby Koans introduce you to how tests work, teach you how to fix tests, and how to anticipate the result of a test. You learn a ton of cool things you can do with Ruby along the way.

The most interesting thing I learned? How flexible quotations work. Here’s the test that does this:

    def test_use_flexible_quoting_to_handle_really_hard_cases
      a = %(flexible quotes can handle both ' and " characters)
      b = %!flexible quotes can handle both ' and " characters!
      c = %{flexible quotes can handle both ' and " characters}
      assert_equal true, a == b
      assert_equal true, a == c
    end

String escaping has long been a thorn in my side when modifying views. I always forget how this works, and I wish I’d known about flexible quotation a long time ago.

### Content Marketing is Not Advertising

The Ruby Koans is a fantastic piece of marketing collateral for Neo, the company that built them. But it’s not about Neo. It’s about teaching others how to program in Ruby.

Content first. Marketing second. Content marketing should be about helping your audience first, and introducing them to your company second.

I love programming, but I don't want to be a developer. [Programming is a means to an end](/blog/other/2015/10/05/automagically-creating-blog-posts-in-jekyll.html). Knowing how to program is useful in the way knowing how to write a blog post, or run a PPC campaign, or implement an A/B test is useful.

Programming is another tool I want to have at my disposal. If I want to encourage new users to invite their friends, or add new users to an email drip campaign to educate them about the product, I need an understanding of what a signup process looks like. More than that, I need to know how to modify the underlying code to achieve my goal, even if I'm not the one implementing the code changes.

Marketing isn't a one-size-fits-all activity. The ideas that worked for one company may or may not work for another company. It's about understanding your audience, and how they interact with your business. It's about getting people to take an action you want them to take.