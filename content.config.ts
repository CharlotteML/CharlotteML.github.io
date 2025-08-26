import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const DateParts = z.object({
  "date-parts": z.array(z.array(z.union([z.number(), z.string()]))),
});

const Author = z.object({
  family: z.string(),
  given: z.string(),
});

export default defineContentConfig({
  collections: {
    index: defineCollection({
      source: "index.json",
      type: "data",
      schema: z.object({
        banners: z.array(
          z.object({
            src: z.string(),
            alt: z.string(),
            link: z.optional(z.string()),
            title: z.optional(z.string()),
          })
        ),
        fields: z.array(
          z.object({ title: z.string(), src: z.string(), link: z.string() })
        ),
      }),
    }),
    constants: defineCollection({
      source: "**.md",
      type: "page",
      schema: z.object({
        cover: z.optional(z.string()),
      }),
    }),
    news: defineCollection({
      source: "news/*.md",
      type: "page",
      schema: z.object({
        date: z.date(),
        cover: z.optional(z.string()),
      }),
    }),
    blogs: defineCollection({
      source: "blog/*.md",
      type: "page",
      schema: z.object({
        date: z.date(),
        cover: z.optional(z.string()),
      }),
    }),
    members: defineCollection({
      source: "members/*.json",
      type: "data",
      schema: z.object({
        people: z.array(
          z.object({
            name: z.object({
              first: z.string(),
              middle: z.optional(z.string()),
              last: z.string(),
            }),
            position: z.array(z.string()),
            research: z.array(z.string()),
            introduction: z.string(),
            teaching: z.optional(
              z.array(
                z.object({
                  course: z.string(),
                  title: z.string(),
                  term: z.string(),
                })
              )
            ),
            contact: z.object({
              email: z.optional(z.array(z.string())),
              phone: z.optional(z.array(z.string())),
              address: z.optional(z.string()),
              website: z.optional(z.string()),
            }),
            photo: z.optional(z.string()),
          })
        ),
      }),
    }),
    publications: defineCollection({
      source: "publication.json",
      type: "data",
      schema: z.object({
        collection: z.array(
          z.object({
            id: z.string(),
            type: z.enum([
              "article-journal",
              "paper-conference",
              "chapter",
              "article",
            ]),
            source: z.string(),
            title: z.string(),
            author: z.array(Author),
            "title-short": z.optional(z.string()),
            "container-title": z.optional(z.string()),
            DOI: z.optional(z.string()),
            ISSN: z.optional(z.string()),
            issue: z.optional(z.string()),
            journalAbbreviation: z.optional(z.string()),
            language: z.optional(z.string()),
            note: z.optional(z.string()),
            page: z.optional(z.string()),
            URL: z.optional(z.string()),
            volume: z.optional(z.string()),
            issued: z.optional(DateParts),
            accessed: z.optional(DateParts),
            publisher: z.optional(z.string()),
            license: z.optional(z.string()),
            "event-title": z.optional(z.string()),
            "event-place": z.optional(z.string()),
            "collection-title": z.optional(z.string()),
            ISBN: z.optional(z.string()),
            "publisher-place": z.optional(z.string()),
            editor: z.optional(z.array(Author)),
            number: z.optional(z.string()),
          })
        ),
      }),
    }),
  },
});
