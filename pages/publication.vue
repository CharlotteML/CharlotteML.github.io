<template>
  <main class="mx-auto max-w-3xl px-6">
    <form class="pt-10" @submit.prevent="search()">
      <div class="flex">
        <button
          class="z-10 inline-flex flex-shrink-0 items-center gap-2 rounded-l-lg border border-accent-200 bg-secondary-100 px-4 py-2.5 text-center text-sm font-medium text-main-900 hover:bg-secondary-200 focus:outline-none focus:ring-4 focus:ring-accent-200 dark:border-accent-600 dark:bg-secondary-900/60 dark:text-main-100 dark:hover:bg-secondary-800 dark:focus:ring-accent-600"
          type="button"
          @click="showTypeSelection = !showTypeSelection"
        >
          Category
          <Icon name="ph:caret-down-bold" size="20" />
        </button>
        <div class="relative w-full">
          <input
            type="search"
            class="z-20 block w-full rounded-r-lg border border-l-0 border-accent-200 bg-secondary-100/30 p-2.5 text-sm focus:border-accent-200 focus:ring-accent-200 dark:border-accent-600 dark:bg-secondary-900/30 dark:placeholder-gray-500 dark:focus:border-accent-600 dark:focus:ring-accent-600"
            placeholder="Search category, conference, journal, title, author..."
            v-model="searchTerm"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 h-full rounded-r-lg border border-accent-200 bg-primary-800 p-2.5 text-sm font-medium text-main-50 hover:bg-primary-700 focus:border-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-800 dark:border-accent-600"
          >
            <Icon name="ph:magnifying-glass-bold" size="20" />
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>

    <ul v-show="showTypeSelection" class="pt-1">
      <li
        class="mt-1 flex items-center rounded-lg border border-accent-200/80 pl-4 dark:border-accent-600/50"
        v-for="type in types"
        @click="type.select = !type.select"
      >
        <input
          type="checkbox"
          :checked="type.select"
          name="bordered-checkbox"
          class="h-4 w-4 rounded border-accent-200 bg-secondary-100 text-primary-800 focus:ring-2 focus:ring-primary-900 dark:border-accent-600 dark:bg-secondary-700 dark:text-primary-600 dark:ring-offset-main-800"
        />
        <label
          class="ml-2 w-full py-4 text-sm font-medium text-main-900 dark:text-main-100"
        >
          {{ type.name.toUpperCase() }}
          <span class="font-semibold text-gray-500"> - {{ type.count }}</span>
        </label>
      </li>
    </ul>
    <span v-html="HTMLoutput"></span>
  </main>
</template>

<script setup lang="ts">
import type Publication from "@/types/Publication";

const { page }: { page: Ref<{ collection: Publication[] }> } = useContent();
const entries = page.value.collection.sort((a, b) => {
  if (a.issued === undefined && b.issued === undefined) return 0;
  else if (a.issued === undefined) return 1;
  else if (b.issued === undefined) return -1;
  else return a.issued["date-parts"][0] > b.issued["date-parts"][0] ? -1 : 1;
});
const bibliography = ref(entries);
const searchTerm = ref("");
// See https://github.com/citation-style-language/schema/blob/master/schemas/input/csl-data.json
const types = ref([
  { name: "article", select: true, count: 0 },
  { name: "book", select: true, count: 0 },
  { name: "chapter", select: true, count: 0 },
  { name: "conference", select: true, count: 0 },
]);
for (const entry of entries) {
  for (const type of types.value) {
    if (entry.type.includes(type.name)) {
      type.count++;
      break;
    }
  }
}
types.value = types.value.filter((type) => type.count > 0);
const typeFilter = computed(() =>
  types.value.filter((type) => type.select).map((type) => type.name),
);
const showTypeSelection = ref(true);

import Fuse from "fuse.js";
const search = () => {
  const filtered = typeFilter.value.length
    ? entries.filter((entry) =>
        typeFilter.value.some((type) => entry.type.includes(type)),
      )
    : entries;
  if (searchTerm.value === "") {
    bibliography.value = filtered;
    return;
  }
  const fuse = new Fuse(filtered, {
    keys: [
      "title",
      "author.family",
      "author.given",
      "container-title",
      "event-title",
      "journalAbbreviation",
      "URL",
    ],
    threshold: 0.3,
  });
  bibliography.value = fuse.search(searchTerm.value).map((r) => r.item);
  return;
};

// @ts-ignore
import Cite from "citation-js";
const HTMLoutput = computed(() => {
  const cite = new Cite(bibliography.value);
  const citationHTML: String = cite.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "en-US",
    nosort: true,
  });
  return citationHTML.replaceAll(
    /(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    (match: string) =>
      `<a class="csl-doi" target="_blank" rel="noopener noreferrer nofollow" href="${match}">${match}</a>`,
  );
});

// OG meta
const title = "Publications";
const description = "Check out what progress we have made";
const icon = "ph:book-bookmark-duotone";
defineOgImageComponent("NuxtSeo", {
  title: title,
  description: description,
  // siteLogo: "/logo.svg",
  siteName: "CharmLab",
  icon: icon,
});
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});
</script>

<style>
.csl-bib-body {
  @apply whitespace-pre-line text-lg;
}
.csl-entry {
  @apply my-0.5 list-item list-inside list-decimal whitespace-break-spaces rounded-xl border border-accent-200 bg-secondary-100/50 p-4 shadow-md dark:border-accent-600 dark:bg-secondary-900/30 dark:shadow-lg;
}
.csl-doi {
  @apply hover:text-accent-200 dark:hover:text-accent-600;
}
</style>
