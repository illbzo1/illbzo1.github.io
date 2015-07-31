require 'fileutils'

# Creating a new post from the command line: rake post:new

namespace :post do
  desc "Creating a new draft for post/entry"
  task :new do
    puts "What's the name for your next post?"
    @name = STDIN.gets.chomp
    @title = @name.split.map(&:capitalize).join(' ')
    @slug = @name.chomp
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-')
    begin
      @date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
    rescue Exception => e
      puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
      exit -1
    end
    @filename = File.join("#{@date}-#{@slug}")
    FileUtils.touch("blog/_posts/#{@filename}.md")
    open("blog/_posts/#{@filename}.md", 'a' ) do |file|
      file.puts "---"
      file.puts "layout: post"
      file.puts "title: \"#{@title}\""
      file.puts "date: #{@date}"
      file.puts "categories: [category, categories]"
      file.puts "desc: maximum 155 char description"
      file.puts "---"
    end
  end
end