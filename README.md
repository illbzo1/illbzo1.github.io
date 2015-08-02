# illbzo1.github.io
This site uses Jekyll for serving pages and Foundation for CSS.

# Development

Make a feature branch from master, commit changes, verify changes work locally.
Merge feature branch into master, verify changes work locally, push from master to deploy.
Delete feature branch, both locally and remotely.

# Blogging

There is a Rake task to create a new blog post. From the command line, in the project root folder:

    rake post:new

Give the post a relevant title, open the file, add relevant category and meta description.

## Helpful links:

[Jekyll](http://jekyllrb.com/)

[Foundation](http://foundation.zurb.com/)

## Running the site locally:

    jekyll serve

## To do:

### General
  * Rake task for creating a new blog post should open that post in Sublime upon creation
  * Look into other useful Rake tasks
  * ok, actually need a favicon now. This is dumb!
  * need a better photo of myself
    - perhaps two (one for the index, one for the blog sidebar)
  Look into using Sass or Less instead of CSS
    - variables would be cool
    - might not need to use so many !important declarations
  * need to add and update robots.txt
  * Ensure there's no dumb mistakes in the actual markup
    - review generated code in a browser
    - see if we can simplify the code
  * Look for more opportunities for partialization
    - can we simplify layout?
  * What about a Jekyll theme?
    - http://jekyllthemes.org/
  * Read through SEO for Jekyll
    - rel author (is this still a thing?)
    - good resource: http://vdaubry.github.io/2014/10/21/SEO-for-your-Jekyll-blog/

### Blog
  * what if the excerpts were a brief summary of the post, rather than the first few lines?
  * need an "Other" category, for other types of posts (news, programming, etc)
  * add links to archives in the sidebar
  * look into full height sidebar
  * add comments to blog posts
  * Social sharing buttons should be smarter
    - Facebook is bad
      * does not grab the page title
    - Twitter is *OK*
    - Google+ should grab the full URL for the post
  * Last blog in the list should not have an HR after (looks dumb with the footer)
  * make meta descriptions for blog posts more descriptive - about the book and what I got from it

### Contact

### Copywriting
  * Open all links in new window

### Header
  * Should perhaps be combined with the nav

### Footer
  * Should add a link to your LinkedIn profile
  * Make footer fix pure CSS, rather than another JS file to load

### Index
  * fix default layout. we have duplicate, unnecessary rows.
  * clean up styles (headers, sidebar, etc)
  * add a logo to link to in the nav bar

### Writing
  * should be a portfolio style page, with samples of writing
  * should be exclusively for fiction work