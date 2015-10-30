---
layout: post
title: "What Is Good Content Marketing, Anyway?"
date: 2015-10-28
categories: [marketing]
desc: What makes content marketing useful? Helping people solve problems, and being of service to your audience.
---

What comes to mind when you think about content marketing? Blog posts, most likely. Maybe white papers, or infographics, or shitty listicles with click bait headlines.

Most content marketing doesn’t have much in the way of content. It’s filler. It’s an excuse to split a Top 10 article into ten pages, each full of ads, and popups encouraging you to subscribe to more Top 10 articles split across ten pages full of ads.

It probably sounds like I’m really down on content marketing, but I’m not. I promise! I love good, quality content marketing. I'm always interesting learning something new, and the best kind of content marketing is educational. It's the kind of blog post, video, ebook or other piece of content that puts “content” first.

If you've got the content right, marketing will take care of itself. Your audience will spread your content, and your message. If you help your audience, your audience will help you accomplish your business goals. This is what content marketing means to me.

Providing interesting and educational content is something I think about a lot. I like to use this blog as a way of sharpening my writing skills, but I still want to be producing good content.

I’ve been wanting to beef up my programming skills, and recently I ran across the [Ruby Koans](http://rubykoans.com/). A piece of content so good it inspired me to do better. I want to produce content as good and educational as the Ruby Koans.

![The Ruby Koans](/img/ruby-koans.jpg "Learning Ruby with the Ruby Koans")

Talk about a value proposition. Oh, my God. It even has a <em>watermark</em>.

Some background: the Ruby Koans are a series of unit tests, and they teach Ruby by requiring you to failing tests. They were initially inspired by Mike Clark's post on [learning Ruby through unit testing](https://pragmaticstudio.com/blog/2005/3/18/ruby-learning-test-1-are-you-there-world) way back in 2005, and Ara Howard's [Ruby quiz entry on Meta Koans](http://rubyquiz.com/quiz67.html).

The Ruby Koans are maintained by [Jim Weirich](https://twitter.com/jimweirich) and the team at [Neo](http://neo.com/).

I woke up at 6am this past Saturday, and I figured it was a good time to get started. I couldn’t sleep, so I got up, opened my laptop, and fired up iTerm and Sublime.

About an hour later, I realized the Ruby Koans is the best content marketing I’ve ever seen, and here’s why.

### It’s Useful

I have a fair understanding of Ruby, but the Koans sharpened my understanding, and made my weak spots easier to identify. I’m pretty good at understanding existing code, and figuring out how to modify it to do the thing I want it to do. I’ve got a good understanding of the separate pieces, how they fit together, and what I can do with data once it’s been collected into a hash or an array.

I’m even reasonable with regex. It’s just pattern matching, man! That’s not so hard.

Where I fall short is writing methods from scratch. I’m not what you’d call a “classically trained” programmer, by any means. Maybe this is a common problem for people. But the Ruby Koans helped me identify this weak spot, and I plan to spend some time beefing up my understanding of how to write methods in the future. Describing what I want the method to do using pseudo-code sounds like a good place to start.

### It’s Clever

The Ruby Koans is just a series of failing tests. When you run Rake, you get helpful error messages telling you how to fix the most recently failed test.

Test driven development is huge in Ruby programming, and teaching how Ruby works in this way is a natural fit. The Ruby Koans introduce you to how tests work, teach you how to fix tests, and how to anticipate the result of a test. Along the way, you learn a ton of cool things you can do with Ruby along the way.

The most interesting thing I learned? How flexible quotations work. Here’s the test that does this:

    def test_use_flexible_quoting_to_handle_really_hard_cases
      a = %(flexible quotes can handle both ' and " characters)
      b = %!flexible quotes can handle both ' and " characters!
      c = %{flexible quotes can handle both ' and " characters}
      assert_equal true, a == b
      assert_equal true, a == c
    end

String escaping has long been a thorn in my side when modifying views. I always forget how this works, and I wish I’d known about flexible quotation a long time ago.

### It’s Not About The Company

The Ruby Koans is undoubtably a fantastic piece of content marketing for Neo, the company that built them. But it’s not about Neo. It’s about teaching others how to program in Ruby, and they're quick to thank all the people who inspired them along the way.

Content first. Marketing second.

Do the Ruby Koans establish the team at Neo as experts in the Ruby language? Absolutely.

For me, [programming is a means to an end](/blog/other/2015/10/05/automagically-creating-blog-posts-in-jekyll.html). It’s another tool I want to have at my disposal. If I want to encourage new signups to invite a friend to sign up as well, I need an understanding of what a signup process looks like.

Marketing is about getting people to take an action you want them to take. Understanding user signups,

What happens when a new user object is created and saved? How can I capture that information, and trigger an event? Say, an alert, or a redirection to a new page?


