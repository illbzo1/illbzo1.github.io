---
layout: post
title: "Automagically Creating Blog Posts In Jekyll"
date: 2015-10-04
categories: [other]
desc: This is a Rake task I've cobbled together to create new blog posts using Jekyll.
---

I've recently joined a writing accountability group, and (as if on command) my motivation to blog has taken a nose dive.

I'm not blaming the people in the group, don't worry! This is a lifelong problem for me. Something about feeling obligated to do something, no matter how much I love it, makes me less motivated.

But it's Sunday night and I've got the itch to blog. I don't really have anything to say about marketing, writing, or copywriting this week, so let's change it up.

I like reading about process: how other people work, how people solve common problems, and why people settled on the tools they use to do the things they do. Why one artist likes water colors and another likes ink washes. Why one programmer likes Ruby and another likes JavaScript.

You guys like backstory? Here's some backstory: I had aspirations of becoming a Ruby developer in a former life. I learned enough Ruby and Rails to be dangerous, thanks in part to my friends at [IndyRB](http://indyrb.org/), but eventually discovered I didn't really want to be a software developer.

That doesn't mean I don't like programming - far from it! I just don't want programming to be *all* I do. I'm far more interested in solving marketing problems, but I still have a ton of interest in front end web design, and using scripts to automate repetitive tasks.

Take a look at this Rake task I've built up over the last few months, for example:

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

	rake post:new:

Asks me for a title for the post, strips out a number of bad characters, then converts that into a URL slug

Asks me for categories for the post

Asks for a meta description, and errors out if the description is over 155 characters (a good place to start so descriptions aren't truncated by search engines)

This can be improved in any number of ways. For example, I always have to look up [Markdown syntax](https://daringfireball.net/projects/markdown/) when I'm blogging. What if syntax was just part of the file created for a new post? What if I had examples for creating headers, subheads, images, and external links? What if the categories checked to make sure the categories I had selected actually existed in my config file?

I wasn't feeling well on Thursday, but I spent some time improving this code. I *always* forgot to add a meta description, so I made it impossible for me to forget in the future.

That's the thing I love about automation and programming. Making small, repetitive tasks easier and less error-prone. And the feedback loop is incredible - I write something, test it, and it works! Or it doesn't!

And that's a thing I often miss in marketing. The feedback loop is almost always much longer. It can take weeks for an a/b test to finish, and even then you're not always guaranteed to have a conclusive answer.

Programming (for smaller tasks like this one, anyway) produces feedback almost immediately. Either it works, or it doesn't.