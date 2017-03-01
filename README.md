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

    bundle exec jekyll serve