export default interface IndexContent {
  banners: {
    src: string; // Image source
    alt: string; // Image alt
    link: string | null | undefined; // Link to related page
    title: string | null | undefined; // Title of link
  }[];
  fields: {
    title: string; // Title of field
    src: string; // Image source for field
  }[];
}
