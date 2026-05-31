import { config, fields, collection, singleton } from "@keystatic/core";

const storage = {
  kind: "github" as const,
  repo: {
    owner: "anna-stoyanova",
    name: "heyhappiness"
  }
}
export default config({
  storage,
  ui: {
    brand: { name: "Hey Happiness" },
  },
  collections: {
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.datetime({ label: "Date" }),
        image: fields.text({
          label: "Image",
          description: "e.g. /images/my-image.webp",
        }),
        summary: fields.text({ label: "Summary", multiline: true }),
        layout: fields.text({ label: "Layout" }),
        content: fields.markdoc({ label: "Content", extension: "md" }),
      },
    }),

    events: collection({
      label: "Events",
      slugField: "title",
      path: "content/events/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.datetime({ label: "Date" }),
        image: fields.text({
          label: "Image",
          description: "e.g. /images/my-image.webp",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Hero", value: "hero" },
            { label: "Post", value: "posts" },
          ],
          defaultValue: "posts",
        }),
        hideTitle: fields.checkbox({ label: "Hide Title", defaultValue: false }),
        summary: fields.text({ label: "Summary", multiline: true }),
        content: fields.markdoc({ label: "Content", extension: "md" }),
      },
    }),

    resources: collection({
      label: "Resources",
      slugField: "title",
      path: "content/resources/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.datetime({ label: "Date" }),
        image: fields.text({
          label: "Image",
          description: "e.g. /images/my-image.webp",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Books", value: "books" },
            { label: "Courses", value: "courses" },
          ],
          defaultValue: "books",
        }),
        hideTitle: fields.checkbox({ label: "Hide Title", defaultValue: false }),
        content: fields.markdoc({ label: "Content", extension: "md" }),
      },
    }),

    services: collection({
      label: "Services",
      slugField: "title",
      path: "content/services/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.datetime({ label: "Date" }),
        image: fields.text({
          label: "Image",
          description: "e.g. /images/my-image.webp",
        }),
        category: fields.text({
          label: "Category",
          description: "e.g. individual-sessions, art-therapy",
        }),
        hideTitle: fields.checkbox({ label: "Hide Title", defaultValue: false }),
        content: fields.markdoc({ label: "Content", extension: "md" }),
      },
    }),

    lectures: collection({
      label: "Lectures",
      slugField: "title",
      path: "content/lectures/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.datetime({ label: "Date" }),
        image: fields.text({
          label: "Image",
          description: "e.g. /images/my-image.webp",
        }),
        hideTitle: fields.checkbox({ label: "Hide Title", defaultValue: false }),
        content: fields.markdoc({ label: "Content", extension: "md" }),
      },
    }),

    interviews: collection({
      label: "Interviews",
      slugField: "title",
      path: "content/interviews/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.datetime({ label: "Date" }),
        image: fields.text({
          label: "Image",
          description: "e.g. /images/my-image.webp",
        }),
        hideTitle: fields.checkbox({ label: "Hide Title", defaultValue: false }),
        content: fields.markdoc({ label: "Content", extension: "md" }),
      },
    }),
  },

  singletons: {
    about: singleton({
      label: "About Page",
      path: "content/about/za-men",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Title" }),
        image: fields.text({
          label: "Image",
          description: "e.g. /images/my-image.webp",
        }),
        hideTitle: fields.checkbox({ label: "Hide Title", defaultValue: false }),
        content: fields.markdoc({ label: "Content", extension: "md" }),
      },
    }),
  },
});
