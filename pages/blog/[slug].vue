<template>
  <main class="max-w-4xl mx-auto px-6 pt-8">
    <img
      :src="page.cover"
      v-if="page.cover"
      class="pb-8 w-screen h-1/2 md:h-screen object-cover overflow-visible dark:opacity-80"
    />
    <ContentDoc>
      <ContentRenderer
        :value="page"
        class="max-w-none bg-main-100/80 dark:bg-main-900/20 p-8 rounded-2xl border border-accent-200 dark:border-accent-600 shadow-xl dark:shadow-2xl prose md:prose-lg lg:prose-xl dark:prose-invert prose-headings:text-primary-900 odd:prose-img:float-left even:prose-img:float-right prose-img:max-w-[20vw] prose-img:min-w-[10rem] prose-blockquote:border-accent-200 prose-blockquote:dark:border-accent-600 prose-blockquote:bg-main-100/80 prose-blockquote:dark:bg-main-900/80 prose-blockquote:py-0.5 prose-th:bg-accent-200/10 prose-th:dark:bg-accent-600/10 prose-th:text-main-950 dark:prose-th:text-main-50 even:prose-tr:bg-main-100/50 dark:even:prose-tr:bg-main-900/30 prose-li:list-inside prose-video:w-full prose-video:rounded-lg"
        :class="{ 'prose-h1:-translate-y-10': page.cover }"
      />
    </ContentDoc>
    <div class="my-6 flex flex-col sm:flex-row">
      <button
        v-if="prev"
        class="flex-grow relative p-1 mb-2 mr-2 overflow-hidden font-medium rounded-xl bg-gradient-to-br from-primary-900 to-accent-200 dark:to-accent-600 hover:text-main-50 focus:ring-4 focus:outline-none focus:ring-accent-200 dark:focus:ring-accent-600 group group-hover:from-primary-900 group-hover:to-accent-200"
      >
        <div
          class="flex flex-row items-center gap-4 px-5 py-2.5 transition-all ease-in duration-75 rounded-md bg-main-50 dark:bg-main-950 group-hover:bg-opacity-0"
        >
          <Icon name="ph:caret-left-bold" size="48" />
          <NuxtLink :href="prev._path" class="flex-grow text-lg">
            {{ prev.title }}
          </NuxtLink>
        </div>
      </button>
      <button
        v-if="next"
        class="flex-grow relative p-1 mb-2 mr-2 overflow-hidden font-medium rounded-xl bg-gradient-to-br from-primary-900 to-accent-200 dark:to-accent-600 hover:text-main-50 focus:ring-4 focus:outline-none focus:ring-accent-200 dark:focus:ring-accent-600 group group-hover:from-primary-900 group-hover:to-accent-200"
      >
        <div
          class="flex flex-row items-center gap-4 px-5 py-2.5 transition-all ease-in duration-75 rounded-md bg-main-50 dark:bg-main-950 group-hover:bg-opacity-0"
        >
          <NuxtLink :href="next._path" class="flex-grow text-lg">
            {{ next.title }}
          </NuxtLink>
          <Icon name="ph:caret-right-bold" size="48" />
        </div>
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

const { page, surround } = useContent();
const prev = surround.value[0]?._path.startsWith("/blog")
  ? surround.value[0]
  : null;
const next = surround.value[1]?._path.startsWith("/blog")
  ? surround.value[1]
  : null;
page.value.body = unwrapImgFromP(page.value.body);
</script>