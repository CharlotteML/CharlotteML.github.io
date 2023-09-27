# Charlotte Machine Learning Lab

This is the source code for the UNC Charlotte Machine Learning Lab website. It is built with [Nuxt.js](https://nuxtjs.org) and [Nuxt Contet](https://content.nuxtjs.org/).

## Content

The content is stored in the `content` directory. The content is written in Markdown and JSON and is organized in a tree structure. You don't need to edit other files than the ones in the `content` directory if you only wish to change the content of the website.

Assets such as images and videos are stored in the `assets` directory. See [Assets](#assets) on how it is organized.

### Blog

The blog posts for demonstration and other purposes than news are stored in the `content/blog` directory. The blog posts are written in Markdown. And the front matter of the blog posts should look like this:

```yaml
---
date: 2021-01-01 12:00:00 # The date of the blog post
cover: /picture/cover.jpg # The cover image of the blog post, relative to the `public` directory
---
```

### News

The news for the lab are stored in the `content/news` directory. The news are written in Markdown. And the front matter of the news should look like this (same as blog posts):

```yaml
---
date: 2021-01-01 12:00:00 # The date of the news
cover: /picture/cover.jpg # The cover image of the news, relative to the `public` directory
---
```

### Contact and Research page

You can view the existing markdown files `content/contact.md` and `content/research.md` for reference. Note that the front matter of these pages will not be used.

### Index page

The index page's data is stored in `content/index.json`. The data is organized in a tree structure. The data is used to generate the landing page. You can refer to the existing data for reference, or follow the specifications below (Note that keys with `?` are optional):

- `banner`: The banner of the landing page. It is an array of objects with the following properties:
  - `src`: The path to the image, relative to the `public` directory.
  - `alt`: The alt text of the image.
  - `link`?: The link for jumping to the related page (e.g. blog post, news, etc.)
  - `title`?: The title of the link to be displayed.
- `fields`: The fields of the lab. It is an array of objects with the following properties:
  - `title`: The title of the field.
  - `src`: The path to the image, relative to the `public` directory.
  - `link`: The link for jumping to the related section on research page.

### Members page

The member page's data is stored in `content/members.json`. The data is organized in a tree structure. The data is used to generate the members page. You can refer to the existing data for reference, or follow the specifications below (Note that keys with `?` are optional):

- `faculty`, `student`, `alumni`: Categories of members to fall into, each consists of an array of objects with the following properties:
  - `name`: object with the following properties:
    - `first`?: The first name of the member.
    - `middle`?: The middle name of the member.
    - `last`?: The last name of the member.
  - `position`: list of strings, the positions of the member.
  - `research`: list of strings, the research interests of the member.
  - `introduction`: The introduction of the member.
  - `teaching`?: (**For faculty only**) The courses taught by member, an array of objects with the following properties:
    - `course`: Course code (e.g. `ITCS 4156`).
    - `title`: The full title/name of the course. (e.g. `Introduction to Machine Learning`).
    - `term`: The term the course is taught. (e.g. `Spring 2023`).
  - `contact`: Contact information of the member, an object with the following properties (all nullable):
    - `email`?: An array of string, the email addresses of the member.
    - `website`?: The website of the member.
    - `phone`?: An array of string, the phone numbers of the member.
    - `address`?: The office location of the member.
  - `photo`?: The path to the photo of the member, relative to the `public` directory.

### Publication page

The publication page's data is stored in `content/publications.json`. The data should be exported by Zotero in the `CSL JSON` format and post-processed using the [Clean CSL JSON](https://github.com/CharlotteML/Clean-CSL-JSON) tool, in order to clean the exported JSON file before merging it into the existing publications in `collection` array. This tool will remove unnecessary fields and desensitize the data. Follow the instructions in the repository for more details.

### Assets

Assets are all stored in `public` directory, and they will be copied to the root of the generated website on build. The assets are organized in a tree structure, and the path of the asset will be preserved in the generated website.

- `banner`: This directory contains the banner images for the landing page.
- `fields`: This directory contains the images for the fields logos (e.g. ones on the bottom of the landing page).
- `photos`: This directory contains the photos for the members page. The photos should be named after the member's name and do not include space (e.g. `John-Doe.jpg`). It is recommended to use square photos otherwise the photos will be cropped. Please make sure the photos are not too large (say 1 MB) to reduce the loading time.
- `pictures`: This directory contains the images for the blog posts and news.
- `videos`: This directory contains the videos for the blog posts and news. **DO NOT** upload unoptimized videos to the repository. And it is highly recommended uploading the videos to a video hosting service (e.g. YouTube) and embed the videos in the blog posts and news.

When referencing an asset in the content, use the path relative to the `public` directory. For example, if you want to reference the `public/images/landing.jpg` image in the `blog/some-new-blog.md` file, you should use `/images/landing.jpg` as the path.

## Development

**You probably don't need this section unless you are trying to modify the template for generating the website**

Note that you need to have [Node.js](https://nodejs.org/en/) installed on your machine. And we use [pnpm](https://pnpm.io/) as the package manager.

### Setup

Make sure to install the dependencies:

```bash
pnpm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

### Production

Build the application for production (static mode):

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
