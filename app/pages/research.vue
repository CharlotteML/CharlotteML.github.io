<template>
  <div class="relative w-full">
    <main class="mx-auto max-w-3xl px-6 pt-8">
      <div ref="drawer">
        <!-- drawer component -->
        <div
          class="z-9999 my-4 overflow-y-auto rounded-xl border border-accent-200 bg-secondary-100 p-2 transition-transform dark:border-accent-600 dark:bg-secondary-900 lg:fixed lg:left-0 lg:top-0 lg:m-0 lg:h-screen lg:w-80 lg:rounded-none lg:border-none lg:py-12"
          tabindex="-1"
          :class="{
            'ease-out lg:translate-x-0': value,
            'ease-in lg:-translate-x-full': !value,
          }"
        >
          <button
            type="button"
            v-if="width >= 1024"
            class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-secondary-500 hover:bg-secondary-200 hover:text-secondary-800 dark:hover:bg-secondary-800 dark:hover:text-secondary-200"
            @click="toggle()"
          >
            <Icon name="ph:x-bold" size="32" />
            <span class="sr-only">Close menu</span>
          </button>
          <div class="overflow-y-auto py-4">
            <ul class="space-y-2 font-medium">
              <li v-for="h2 in toc?.links">
                <NuxtLink
                  :href="`#${h2.id}`"
                  class="flex items-center rounded-lg p-2 text-lg font-semibold hover:bg-secondary-50/50 dark:hover:bg-secondary-950/50"
                  @click="toggle()"
                >
                  <span class="ml-3">{{ h2.text }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          v-if="width >= 1024"
          class="fixed left-2 top-1/2 z-10 flex h-fit min-h-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-accent-200/50 bg-accent-200 bg-opacity-10 p-1 backdrop-blur-sm hover:min-h-[75vh] hover:bg-opacity-30 dark:border-accent-600/50 dark:bg-accent-600 dark:bg-opacity-10 dark:hover:bg-opacity-30"
          @click="toggle()"
        >
          <Icon
            name="ph:caret-right-fill"
            size="48"
            class="text-accent-200 dark:text-accent-600"
          />
        </div>
      </div>
      <ContentRenderer
        v-if="page"
        :value="page"
        class="prose max-w-none dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-primary-800 prose-p:text-justify prose-a:text-inherit prose-a:decoration-transparent prose-blockquote:border-accent-200 prose-blockquote:bg-secondary-100/80 prose-blockquote:py-0.5 prose-li:list-inside even:prose-tr:bg-secondary-100/50 prose-th:bg-accent-200/10 prose-th:text-main-950 prose-img:mx-auto prose-img:max-h-full prose-img:min-h-[10rem] prose-img:object-contain dark:prose-headings:text-primary-600 prose-blockquote:dark:border-accent-600 prose-blockquote:dark:bg-secondary-900/80 dark:even:prose-tr:bg-secondary-900/30 prose-th:dark:bg-accent-600/10 dark:prose-th:text-main-50 lg:prose-img:float-right lg:prose-img:my-0 lg:prose-img:ml-8 lg:prose-img:mt-4 lg:prose-img:max-h-[15rem] lg:prose-img:max-w-md"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import type { MarkdownRoot } from "@nuxt/content";

interface ElementNode {
  type: string;
  tag?: string;
  children?: ElementNode[];
}

const unwrapImgFromP = (tree: ElementNode) => {
  if (
    tree.type === "element" &&
    tree.tag === "p" &&
    tree.children?.length === 1 &&
    tree.children[0].type === "element" &&
    tree.children[0].tag === "img"
  ) {
    return tree.children[0];
  }
  if (tree.children) {
    tree.children = tree.children.map(unwrapImgFromP);
  }
  return tree;
};

const route = useRoute();
const { data: page } = await useAsyncData("research", () =>
  queryCollection("constants").path(route.path).first()
);
// Patch for img in p
if (page.value) {
  page.value.body = unwrapImgFromP(page.value.body) as MarkdownRoot;
}

const toc = page.value?.body.toc;

const storage = useLocalStorage(
  "charmlab",
  { "research-sidebar-seen": false },
  { mergeDefaults: true }
);
const [value, toggle] = useToggle(true);
const { width } = useWindowSize();

const drawer = ref(null as HTMLElement | null);
onClickOutside(drawer, () => toggle(false));
watchOnce(value, () => {
  storage.value["research-sidebar-seen"] = true;
});
onMounted(() => {
  if (storage.value["research-sidebar-seen"]) {
    toggle(false);
  }
});

// OG meta
const title = "Publications";
const description = "See what we've been working on";
const icon = "ph:projector-screen-duotone";
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
