<template>
  <main class="flex h-full flex-col">
    <img
      :src="page.cover"
      v-if="page.cover"
      class="h-1/2 w-screen overflow-visible object-cover pb-8 dark:opacity-80 md:h-screen"
    />
    <div class="mx-auto h-full max-w-3xl px-6 pt-8">
      <ContentDoc>
        <ContentRenderer
          :value="page"
          class="prose max-w-none dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-primary-800 prose-a:text-inherit prose-blockquote:border-accent-200 prose-blockquote:bg-secondary-100/80 prose-blockquote:py-0.5 prose-li:list-inside even:prose-tr:bg-secondary-100/50 prose-th:bg-accent-200/10 prose-th:text-main-950 prose-img:w-full dark:prose-headings:text-primary-600 prose-blockquote:dark:border-accent-600 prose-blockquote:dark:bg-secondary-900/80 dark:even:prose-tr:bg-secondary-900/30 prose-th:dark:bg-accent-600/10 dark:prose-th:text-main-50"
        />
        <i class="inline-block pt-8 text-lg">
          {{
            useDateFormat(page.date, "MMM DD, YYYY", { locales: "en-US" }).value
          }}
        </i>
      </ContentDoc>
    </div>
    <span class="flex-grow"></span>
    <div
      class="mx-auto my-6 flex h-full max-w-3xl flex-col px-6 pt-8 sm:flex-row"
    >
      <button
        v-if="prev"
        class="group relative mb-2 mr-2 min-w-[50%] flex-grow overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-accent-200 p-1 font-medium hover:text-main-50 focus:outline-none focus:ring-4 focus:ring-accent-200 group-hover:from-primary-800 group-hover:to-accent-200 dark:to-accent-600 dark:focus:ring-accent-600"
      >
        <NuxtLink
          :href="prev._path"
          class="flex h-full flex-row items-center gap-4 rounded-md bg-secondary-50 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-secondary-950"
        >
          <Icon name="ph:caret-left-bold" size="32" class="flex-shrink-0" />
          <span class="flex-grow text-lg">
            {{ prev.title }}
          </span>
        </NuxtLink>
      </button>
      <button
        v-if="next"
        class="group relative mb-2 mr-2 min-w-[50%] flex-grow overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-accent-200 p-1 font-medium hover:text-main-50 focus:outline-none focus:ring-4 focus:ring-accent-200 group-hover:from-primary-800 group-hover:to-accent-200 dark:to-accent-600 dark:focus:ring-accent-600"
      >
        <NuxtLink
          :href="next._path"
          class="flex h-full flex-row items-center gap-4 rounded-md bg-secondary-50 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-secondary-950"
        >
          <span class="flex-grow text-lg">
            {{ next.title }}
          </span>
          <Icon name="ph:caret-right-bold" size="32" class="flex-shrink-0" />
        </NuxtLink>
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
const unwrapImgFromP = (tree: any) => {
  if (
    tree.type === "element" &&
    tree.tag === "p" &&
    tree.children.length === 1 &&
    tree.children[0].type === "element" &&
    tree.children[0].tag === "img"
  ) {
    tree = tree.children[0];
  } else if (tree.children) {
    tree.children = tree.children.map(unwrapImgFromP);
  }
  return tree;
};

const { page } = useContent();
const { data: surround } = await useAsyncData("news", () =>
  queryContent("/news/")
    .sort({ date: 1 })
    .where({ _partial: false })
    .findSurround(page.value._path),
);

const prev = surround.value?.at(0) || null;
const next = surround.value?.at(1) || null;
page.value.body = unwrapImgFromP(page.value.body);

// OG meta
const title = page.value.title;
const description = " ";
const icon = null;
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
