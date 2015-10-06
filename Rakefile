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
      file.puts "****************************************"
      file.puts ""
      file.puts "Things to keep in mind while writing:"
      file.puts ""
      file.puts "What keyword or search phrase are you targeting?"
      file.puts "Answer:"
      file.puts ""
      file.puts "Can you link to someone related to this post? If so, who?"
      file.puts "Answer:"
      file.puts ""
      file.puts "Can you link to or use interesting data or an interesting statistic for the post?"
      file.puts "Answer:"
      file.puts ""
      file.puts "****************************************"
      file.puts ""
      file.puts "Rough outline:"
      file.puts ""
      file.puts "  Compelling headline"
      file.puts "  Nice big header image"
      file.puts "  Introductory paragraph"
      file.puts "  Subhead 1"
      file.puts "  Secondary image"
      file.puts "  Subhead 2"
      file.puts "  (optional)Bulleted list"
      file.puts "  Conclusion"
      file.puts ""
      file.puts "****************************************"
    end
  end
end