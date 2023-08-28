export default interface Publication {
  id: string;
  type: Type;
  "container-title"?: string;
  DOI?: string;
  ISSN?: string;
  issue?: string;
  journalAbbreviation?: string;
  language?: string;
  note?: string;
  page?: string;
  source: string;
  title: string;
  "title-short"?: string;
  URL?: string;
  volume?: string;
  author: Author[];
  accessed?: DateParts;
  issued: DateParts;
  publisher?: string;
  license?: string;
  "event-title"?: string;
  "collection-title"?: string;
  "event-place"?: string;
  ISBN?: string;
  "publisher-place"?: string;
  editor?: Author[];
  number?: string;
}

export interface DateParts {
  "date-parts": Array<Array<number | string>>;
}

export interface Author {
  family: string;
  given: string;
}

// See https://github.com/citation-style-language/schema/blob/master/schemas/input/csl-data.json
export type Type =
  | "article-journal"
  | "paper-conference"
  | "chapter"
  | "article";
