<template>
  <main class="max-w-3xl mx-auto px-6">
    <form class="pt-10" @submit.prevent="search()">
      <div class="flex">
        <button
          class="flex-shrink-0 z-10 inline-flex items-center gap-2 py-2.5 px-4 text-sm font-medium text-center rounded-l-lg text-main-900 dark:text-main-100 bg-main-100 dark:bg-main-900/60 border border-accent-200 dark:border-accent-600 hover:bg-main-200 focus:ring-4 focus:outline-none focus:ring-accent-200 dark:hover:bg-main-800 dark:focus:ring-accent-600"
          type="button"
          @click="showTypeSelection = !showTypeSelection"
        >
          Category
          <Icon name="ph:caret-down-bold" size="20" />
        </button>
        <div class="relative w-full">
          <input
            type="search"
            class="block p-2.5 w-full z-20 text-sm bg-main-100/30 dark:bg-main-900/30 rounded-r-lg border border-l-0 border-accent-200 dark:border-accent-600 focus:ring-accent-200 dark:focus:ring-accent-600 focus:border-accent-200 dark:focus:border-accent-600 dark:placeholder-gray-500"
            placeholder="Search category, conference, journal, title, author..."
            v-model="searchTerm"
          />
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-main-50 bg-primary-800 rounded-r-lg border border-accent-200 dark:border-accent-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 focus:border-primary-800"
          >
            <Icon name="ph:magnifying-glass-bold" size="20" />
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>

    <ul v-show="showTypeSelection" class="pt-1">
      <li
        class="flex items-center pl-4 mt-1 border border-accent-200/80 rounded-lg dark:border-accent-600/50"
        v-for="type in types"
        @click="type.select = !type.select"
      >
        <input
          type="checkbox"
          :checked="type.select"
          name="bordered-checkbox"
          class="w-4 h-4 text-primary-800 bg-main-100 border-accent-200 dark:border-accent-600 rounded focus:ring-primary-900 dark:ring-offset-main-800 focus:ring-2 dark:bg-main-700"
        />
        <label
          class="w-full py-4 ml-2 text-sm font-medium text-main-900 dark:text-main-100"
        >
          {{ type.name.toUpperCase() }}
          <span class="text-gray-500 font-semibold"> - {{ type.count }}</span>
        </label>
      </li>
    </ul>

    <span v-html="HTMLoutput"></span>
  </main>
</template>

<script setup lang="ts">
const { page } = useContent();
const entries = page.value.collection;
const bibliography = ref(entries);
const searchTerm = ref("");
// See https://github.com/citation-style-language/schema/blob/master/schemas/input/csl-data.json
const types = ref([
  { name: "article", select: false, count: 0 },
  { name: "book", select: false, count: 0 },
  { name: "chapter", select: false, count: 0 },
  { name: "conference", select: false, count: 0 },
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
  types.value.filter((type) => type.select).map((type) => type.name)
);
const showTypeSelection = ref(false);

import Fuse from "fuse.js";
const search = () => {
  const filtered = typeFilter.value.length
    ? entries.filter((entry) =>
        typeFilter.value.some((type) => entry.type.includes(type))
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
    ],
    threshold: 0.3,
  });
  bibliography.value = fuse.search(searchTerm.value).map((r) => r.item);
  return;
};

import Cite from "citation-js";
const HTMLoutput = computed(() => {
  const cite = new Cite(bibliography.value);
  return cite.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "en-US",
  });
});
</script>

<style>
.csl-bib-body {
  @apply text-lg whitespace-pre-line;
}
.csl-entry {
  @apply my-0.5 list-item list-inside bg-main-100/50 dark:bg-main-900/30 p-4 rounded-xl border border-accent-200 dark:border-accent-600 shadow-md dark:shadow-lg;
}
</style>
