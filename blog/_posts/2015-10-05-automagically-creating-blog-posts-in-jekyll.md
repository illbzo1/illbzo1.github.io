---
layout: post
comments: true
title: "Automagically Creating Blog Posts In Jekyll"
date: 2015-10-05
redirect_from: blog/other/2015/10/05/automagically-creating-blog-posts-in-jekyll.html
categories: [programming]
desc: This is a Rake task I've cobbled together to create new blog posts using Jekyll.
---

I like reading about process: how other people work, how people solve common problems, and why people settled on the tools they use to do the things they do. Why one artist likes water colors and another likes ink washes. Why one programmer likes Ruby and another likes JavaScript.

You guys like backstory? Here's some backstory: in a former life, I had aspirations of becoming a Ruby developer. I learned enough Ruby to be dangerous, thanks in part to my friends at [IndyRB](http://indyrb.org/), but I discovered I didn't want to be a software developer.

I like programming. I just don't want programming to be *all* I do. I'm more interested in solving marketing problems, but I still have a ton of interest in front end development, and writing scripts to automate repetitive tasks.

This site is mostly a Jekyll blog hosted on Github Pages. When I built the site back in March, I wanted a place to blog and show off the writing I've done. I also wanted an easy way to code, play around with design, and prevent my Git skills from completely evaporating into thin air.

It's worked out well for me, and I've got the shitty, non-descriptive commit message history to prove it.

[Making a new post in Jekyll](http://jekyllrb.com/docs/posts/) is pretty easy by default. Tedious, but easy. I'm not as averse to manual processes as some of my friends, but I wanted something less tedious. Jekyll posts are just text files, and I wanted to automate repetitive tasks, and I didn't want to forget any of the moving pieces that make up a blog post.

So I still do some programming, sometimes! Here's a Rake task I've built to make a new blog post from the command line:

	require 'fileutils'

	# Creating a new post from the command line: rake post:new

	namespace :post do
	  desc "Creating a new draft for post/entry"
	  task :new do
	    # grab the title for the post
	    puts "What's the title of this post?"
	    @name = STDIN.gets.chomp
	    @title = @name.split.map(&:capitalize).join(' ')
	    # convert the title into the post URL
	    @slug = @name.chomp
	    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
	    @slug = @slug.downcase.strip.gsub(' ', '-')
	    # grab categories for the post
	    puts "What categories does this post belong to?"
	    @categories = STDIN.gets.chomp
	    @categories = @categories.split.join(', ')
	    # grab a meta description for the post
	    puts "What's a short description for this post?"
	    @description = STDIN.gets.chomp
	    while @description.length > 155
	      puts "The maximum length for a meta description is 155 characters. Shorten it up."
	      @description = STDIN.gets.chomp
	    end
	    begin
	      @date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
	    rescue Exception => e
	      puts "Date format must be YYYY-MM-DD. Make sure you typed it correctly!"
	      exit -1
	    end
	    @filename = File.join("#{@date}-#{@slug}")
	    FileUtils.touch("blog/_posts/#{@filename}.md")
	    open("blog/_posts/#{@filename}.md", 'a' ) do |file|
	      file.puts "---"
	      file.puts "layout: post"
	      file.puts "title: \"#{@title}\""
	      file.puts "date: #{@date}"
	      file.puts "categories: [#{@categories}]"
	      file.puts "desc: #{@description}"
	      file.puts "---"
	    end
	  end
	end

This isn't earth-shattering code, and I'm not the first to publish a Rake task for creating blog posts in Jekyll. But it does what I need it to do. This file does a lot when I run

	rake post:new

This command grabs a title for the post, converts it into a friendly URL slug, adds the post to a category, adds a meta description, and then creates the file for me.

This Rake task could be improved in any number of ways. For example, I always have to look up [Markdown syntax](https://daringfireball.net/projects/markdown/) when I'm blogging. What if every new post had sample syntax? What if I had examples for creating headers, subheads, images, and external links? What if the task checked to make sure the categories I had selected actually existed in my config file?

I *always* forgot to add a meta description, so I spent some time last week to make it impossible to forget in the future.

A good way to think about how to extend functionality is to consider next steps. What's programming, but talking to a machine and describing a series of steps to take?

So, if I wanted to improve this task (and I certainly do) what do I do every time I make a new post? I open the post in [Sublime](http://www.sublimetext.com/) and start writing. That seems like a logical way to update this Rake file. There's a pleasing roundness to capping this process by opening the new file with my text editor of choice.

This is what I love about programming. Making small, repetitive tasks easier and less error-prone. And the feedback loop is incredible - I write something, test it, and it works! Or it doesn't!

And it's a thing I often miss in marketing. The feedback loop is almost always much longer. It can take weeks for an a/b test to finish, and even then you're not always guaranteed to have a conclusive answer.

Programming (for smaller tasks like this one, anyway) produces feedback almost immediately. Either it works, or it doesn't.