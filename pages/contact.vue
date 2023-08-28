<template>
  <main class="mx-auto max-w-4xl px-6 pt-8">
    <img
      :src="page.cover"
      v-if="page.cover"
      class="h-1/2 w-screen overflow-visible object-cover pb-8 dark:opacity-80 md:h-screen"
    />
    <ContentDoc>
      <ContentRenderer
        :value="page"
        class="prose max-w-none rounded-2xl border border-accent-200 bg-secondary-100/30 p-8 shadow-xl dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-primary-800 prose-a:text-primary-800 prose-a:decoration-0 prose-blockquote:border-accent-200 prose-blockquote:bg-secondary-100/80 prose-blockquote:py-0.5 prose-li:list-inside even:prose-tr:bg-secondary-100/50 prose-th:bg-accent-200/10 prose-th:text-main-950 prose-img:min-w-[10rem] prose-img:max-w-[20vw] odd:prose-img:float-left even:prose-img:float-right prose-video:w-full prose-video:rounded-lg prose-hr:border-accent-200 dark:border-accent-600 dark:bg-secondary-900/10 dark:shadow-2xl dark:prose-headings:text-primary-600 dark:prose-a:text-primary-600 prose-blockquote:dark:border-accent-600 prose-blockquote:dark:bg-secondary-900/80 dark:even:prose-tr:bg-secondary-900/30 prose-th:dark:bg-accent-600/10 dark:prose-th:text-main-50 dark:prose-hr:border-accent-600"
      />
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
const { page } = useContent();
</script>

<style>
iframe {
  @apply h-96 w-full md:h-[40rem];
}
</style>
