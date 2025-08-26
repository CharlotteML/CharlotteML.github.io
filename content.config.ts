import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const DateParts = z.object({
  "date-parts": z.array(z.array(z.union([z.number(), z.string()]))),
});

const Author = z.object({ family: z.string(), given: z.string() });

const People = z.object({
  name: z.object({
    first: z.string(),
    middle: z.string().optional(),
    last: z.string(),
  }),
  position: z.array(z.string()),
  research: z.array(z.string()),
  introduction: z.string(),
  teaching: z
    .array(
      z.object({
        course: z.string(),
        title: z.string(),
        term: z.string(),
      })
    )
    .optional(),
  contact: z.object({
    email: z.array(z.string()).optional(),
    phone: z.array(z.string()).optional(),
    address: z.string().optional(),
    website: z.string().optional(),
  }),
  photo: z.string().optional(),
});

const Publication = z.object({
  id: z.string(),
  type: z.enum([
    "article",
    "article-journal",
    "book",
    "chapter",
    "document",
    "paper-conference",
  ]),
  source: z.string(),
  title: z.string(),
  author: z.array(Author),
  "title-short": z.string().optional(),
  "container-title": z.string().optional(),
  DOI: z.string().optional(),
  ISSN: z.string().optional(),
  issue: z.string().optional(),
  journalAbbreviation: z.string().optional(),
  language: z.string().optional(),
  note: z.string().optional(),
  page: z.string().optional(),
  URL: z.string().optional(),
  volume: z.string().optional(),
  issued: DateParts.optional(),
  accessed: DateParts.optional(),
  publisher: z.string().optional(),
  license: z.string().optional(),
  "event-title": z.string().optional(),
  "event-place": z.string().optional(),
  "collection-title": z.string().optional(),
  ISBN: z.string().optional(),
  "publisher-place": z.string().optional(),
  editor: z.array(Author).optional(),
  number: z.string().optional(),
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
            link: z.string().optional(),
            title: z.string().optional(),
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
      schema: z.object({ cover: z.string().optional() }),
    }),
    news: defineCollection({
      source: "news/*.md",
      type: "page",
      schema: z.object({ date: z.date(), cover: z.string().optional() }),
    }),
    blogs: defineCollection({
      source: "blog/*.md",
      type: "page",
      schema: z.object({ date: z.date(), cover: z.string().optional() }),
    }),
    alumni: defineCollection({
      source: "member/alumni/*.json",
      type: "data",
      schema: People,
    }),
    faculty: defineCollection({
      source: "member/faculty/*.json",
      type: "data",
      schema: People,
    }),
    student: defineCollection({
      source: "member/student/*.json",
      type: "data",
      schema: People,
    }),
    publication: defineCollection({
      source: "publication/*.json",
      type: "data",
      schema: Publication,
    }),
  },
});
