<template>
  <div class="mx-auto max-w-full p-6 md:max-w-4xl">
    <div class="relative overflow-x-auto">
      <div class="mx-auto w-fit pb-4">
        <label class="sr-only">Search</label>
        <div class="relative mt-1">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <Icon name="ph:magnifying-glass-bold" size="18" />
          </div>
          <input
            type="text"
            class="block w-64 rounded-lg border border-accent-200 bg-secondary-100/50 p-2 pl-10 text-sm placeholder-secondary-600 shadow-md focus:border-accent-200 focus:ring-accent-200 dark:border-accent-600 dark:bg-secondary-900/30 dark:placeholder-secondary-400 dark:focus:border-accent-600 dark:focus:ring-accent-600 sm:rounded-lg md:w-96"
            placeholder="Search for courses, instructors, titles, terms..."
            v-model.trim.lazy="searchTerm"
          />
        </div>
      </div>
    </div>

    <div
      class="relative max-w-full overflow-x-auto rounded-md border border-accent-200 shadow-md dark:border-accent-600 sm:rounded-lg"
      v-if="searchResult.length"
    >
      <table
        class="w-full text-left text-sm text-secondary-800 dark:text-secondary-200"
      >
        <thead class="bg-secondary-100 text-sm uppercase dark:bg-secondary-900">
          <tr>
            <th
              scope="col"
              class="px-6 py-3"
              v-for="h in ['Title', 'Course', 'Term', 'Instructor']"
            >
              {{ h }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-t border-accent-200/50 odd:bg-secondary-100/30 even:bg-secondary-100/80 dark:border-accent-600/30 dark:odd:bg-secondary-900/10 dark:even:bg-secondary-900/50"
            v-for="c in searchResult"
          >
            <th
              scope="row"
              class="px-6 py-4 font-semibold md:whitespace-nowrap"
            >
              {{ c.title }}
            </th>
            <td class="px-6 py-4">{{ c.course }}</td>
            <td class="px-6 py-4">{{ c.term }}</td>
            <td class="px-6 py-4">{{ c.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="flex flex-col items-center justify-center p-6 text-secondary-800 dark:text-secondary-200"
      v-else
    >
      <Icon name="ph:circle-dashed-bold" size="64" />
      <p class="mt-4 text-lg font-medium">No results found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Person from "@/types/Person";

const content = await useAsyncData(async () =>
  queryContent("member").findOne(),
);
const faculty = content.data.value?.faculty;
const courses = ref(
  [] as { name: string; course: string; title: string; term: string }[],
);
faculty.map((f: Person) =>
  f.teaching?.map((c) =>
    courses.value.push({
      name: [f.name.first, f.name.middle, f.name.last].join(" "),
      course: c.course,
      title: c.title,
      term: c.term,
    }),
  ),
);

const term2date = (term: string) => {
  const [season, year] = term.split(" ");
  const month =
    season.toLowerCase() === "spring"
      ? "01"
      : season.toLowerCase() === "fall"
        ? "09"
        : "05";
  return new Date(`${year}-${month}-01`);
};
const sortedCourses = useSorted(courses, (a, b) => {
  const aDate = term2date(a.term);
  const bDate = term2date(b.term);
  if (aDate < bDate) return 1;
  if (aDate > bDate) return -1;
  return a.course.localeCompare(b.course);
});

import Fuse from "fuse.js";
const searchTerm = ref("");
const searchResult = computed(() => {
  if (searchTerm.value === "") return sortedCourses.value;
  const fuse = new Fuse(sortedCourses.value, {
    keys: ["name", "course", "title", "term"],
  });
  return fuse.search(searchTerm.value).map((x) => x.item);
});

// OG meta
const title = "Teaching";
const description = "We teach to shape the future";
const icon = "ph:chalkboard-teacher-duotone";
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
