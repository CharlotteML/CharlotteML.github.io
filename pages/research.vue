<template>
  <div class="w-full relative">
    <main class="max-w-3xl mx-auto px-6 pt-8">
      <div ref="drawer">
        <!-- drawer component -->
        <div
          class="lg:fixed lg:top-0 lg:left-0 z-40 lg:w-80 lg:h-screen lg:py-12 lg:m-0 lg:rounded-none lg:border-none rounded-xl border border-accent-200 dark:border-accent-600 my-4 p-2 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
          tabindex="-1"
          :class="{
            'lg:translate-x-0 ease-out': value,
            'lg:-translate-x-full ease-in': !value,
          }"
        >
          <button
            type="button"
            v-if="width >= 1024"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="toggle()"
          >
            <Icon name="ph:x-bold" size="32" />
            <span class="sr-only">Close menu</span>
          </button>
          <div class="py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
              <li v-for="h2 in toc.links">
                <NuxtLink
                  :href="`#${h2.id}`"
                  class="flex items-center p-2 rounded-lg hover:bg-main-100 dark:hover:bg-main-900 text-lg font-semibold"
                >
                  <span class="ml-3">{{ h2.text }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          v-if="width >= 1024"
          class="fixed left-2 top-1/2 -translate-y-1/2 h-fit min-h-0 hover:min-h-[75vh] bg-accent-200 dark:bg-accent-600 border border-accent-200/50 dark:border-accent-600/50 rounded-xl flex justify-center items-center bg-opacity-10 dark:bg-opacity-10 hover:bg-opacity-30 dark:hover:bg-opacity-30 z-10 backdrop-blur-sm cursor-pointer p-1"
          @click="toggle()"
        >
          <Icon
            name="ph:caret-right-fill"
            size="48"
            class="text-accent-200 dark:text-accent-600"
          />
        </div>
      </div>
      <ContentDoc>
        <ContentRenderer
          :value="page"
          class="max-w-none prose md:prose-lg lg:prose-xl dark:prose-invert prose-headings:text-primary-900 prose-img:float-right prose-img:max-w-[20vw] prose-img:min-w-[10rem] prose-blockquote:border-accent-200 prose-blockquote:dark:border-accent-600 prose-blockquote:bg-main-100/80 prose-blockquote:dark:bg-main-900/80 prose-blockquote:py-0.5 prose-th:bg-accent-200/10 prose-th:dark:bg-accent-600/10 prose-th:text-main-950 dark:prose-th:text-main-50 even:prose-tr:bg-main-100/50 dark:even:prose-tr:bg-main-900/30 prose-li:list-inside prose-a:text-inherit prose-a:decoration-transparent"
        />
      </ContentDoc>
    </main>
  </div>
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

const { page, toc } = useContent();
page.value.body = unwrapImgFromP(page.value.body);

const [value, toggle] = useToggle();
const { width } = useWindowSize();

const drawer = ref(null as HTMLElement | null);
onClickOutside(drawer, () => toggle(false));
</script>

<style scoped></style>
