<template>
  <div>
    <h2
      class="my-6 mt-6 w-full text-center text-lg font-semibold md:text-xl lg:text-2xl"
    >
      See what we're up to
    </h2>
    <ol class="relative mx-6 max-w-3xl md:mx-auto">
      <li class="mb-10 ml-4" v-for="blog in latestArticles" :key="blog.id">
        <NuxtLink
          :href="blog.path"
          class="hover:bg-secondary-30 mx-auto flex flex-col items-center overflow-hidden rounded-lg border border-accent-200 bg-secondary-100/50 shadow hover:bg-secondary-100/30 dark:border-accent-600 dark:bg-secondary-900/30 dark:hover:bg-secondary-900/10 md:max-w-2xl md:flex-row"
        >
          <img
            class="h-72 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none"
            :src="blog.cover || '/logo.svg'"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ blog.title }}
            </h5>
            <time
              class="mb-1 text-lg font-medium leading-none text-main-900 dark:text-main-100"
            >
              {{
                useDateFormat(blog.date, "MMM DD, YYYY", { locales: "en-US" })
                  .value
              }}
            </time>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ blog.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const { data: latestArticles } = await useAsyncData("all-articles", () =>
  queryCollection("blogs").order("date", "DESC").all(),
);
// OG meta
const title = "Blogs";
const description = "Tools, demos, and more";
const icon = "ph:brackets-curly-duotone";
defineOgImageComponent("NuxtSeo", {
  title: title,
  description: description,
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
