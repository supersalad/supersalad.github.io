# Personal Website

This repository contains the source code for my personal website, built with Jekyll and hosted on GitHub Pages.

## Development Setup

1. Install Ruby and Bundler if you haven't already
2. Clone this repository
3. Install dependencies:
   ```
   bundle install
   ```
4. Run the site locally:
   ```
   bundle exec jekyll serve
   ```
5. Visit `http://localhost:4000` in your browser

## Adding Content

- Create new blog posts in the `_posts` directory
- Pages can be added to the root directory with `.md` extension
- Images and other assets go in the `assets` directory

## Adding google forms
1. Create google form
2. Go to https://stefano.brilli.me/google-forms-html-exporter to generate html
3. Create html form as include in _includes
4. See example in contact-form.html for example on reload free posting


## Theme

This site uses the [Basically Basic](https://github.com/mmistakes/jekyll-theme-basically-basic) theme. See the theme documentation for customization options.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.
