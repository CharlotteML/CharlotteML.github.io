<template>
  <div>
    <!-- Carousel  -->
    <div class="relative mb-4 w-full md:mb-8 lg:mb-16">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden md:h-96">
        <Transition>
          <img
            :src="slideState.src"
            :key="slideState.src"
            class="absolute block h-full w-full object-cover transition-all duration-700 ease-in-out"
            :class="{ 'opacity-80': $colorMode.value === 'dark' }"
            :alt="slideState.alt || 'Banner image'"
          />
        </Transition>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        @click="prevSlide()"
        @mouseenter="pauseAutoSlide()"
        @mouseleave="resumeAutoSlide()"
      >
        <span class="gallery-button">
          <Icon
            class="h-6 w-6 text-main-950 dark:text-main-50"
            name="ph:caret-left-bold"
          />
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        @click="nextSlide()"
        @mouseenter="pauseAutoSlide()"
        @mouseleave="resumeAutoSlide()"
      >
        <span class="gallery-button">
          <Icon
            class="h-6 w-6 text-main-950 dark:text-main-50"
            name="ph:caret-right-bold"
          />
          <span class="sr-only">Next</span>
        </span>
      </button>
      <Transition>
        <button
          v-if="slideState.title && slideState.link"
          class="group absolute bottom-2 left-1/2 flex h-10 min-w-fit -translate-x-1/2 items-center justify-center rounded-full bg-accent-200/80 p-4 text-center font-bold transition-all duration-300 ease-in-out hover:bg-accent-200 focus:outline-none dark:bg-accent-600/80 dark:hover:bg-accent-600"
        >
          <NuxtLink
            :href="slideState.link"
            @mouseenter="pauseAutoSlide()"
            @mouseleave="resumeAutoSlide()"
          >
            {{ slideState.title }}
          </NuxtLink>
        </button>
      </Transition>
      <span
        class="absolute -bottom-5 left-1/2 flex w-32 -translate-x-1/2 flex-row gap-1"
      >
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="h-3 w-3 cursor-pointer rounded-full"
          :class="
            slideState.src === slide.src
              ? 'grow bg-secondary-950/90 dark:bg-secondary-50/80'
              : 'flex-none bg-secondary-950/60 dark:bg-secondary-50/50'
          "
          @click="slideState.src !== slide.src && nextSlide(index - slideIndex)"
          @mouseenter="pauseAutoSlide()"
          @mouseleave="resumeAutoSlide()"
        ></span>
      </span>
    </div>
    <!-- News -->
    <h2
      class="mt-6 w-full text-center text-lg font-semibold md:text-xl lg:text-2xl"
    >
      What's New
    </h2>
    <ContentList
      path="/news/"
      v-slot="{ list }"
      :query="{ limit: 5, sort: [{ date: -1 }], where: [{ _partial: false }] }"
    >
      <ol
        class="relative mx-6 max-w-3xl border-l-2 border-secondary-900 dark:border-secondary-100 md:mx-auto"
      >
        <li class="group mb-10 ml-4" v-for="news in list" :key="news.slug">
          <NuxtLink :href="news._path" class="cursor-pointer">
            <span
              class="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-secondary-900 bg-secondary-50 dark:border-secondary-100 dark:bg-secondary-950"
            ></span>
            <time
              class="mb-1 text-sm font-medium leading-none text-secondary-900 dark:text-secondary-100"
            >
              {{
                useDateFormat(news.date, "MMM DD, YYYY", { locales: "en-US" })
                  .value
              }}
            </time>
            <h3
              class="text-xl font-black text-primary-800 dark:text-primary-600"
            >
              {{ news.title }}
            </h3>
            <div
              class="mb-4 h-fit max-h-0 overflow-hidden text-base font-normal text-main-900/80 transition-all duration-500 ease-linear group-hover:max-h-96 dark:text-main-100/80"
            >
              <div class="flex w-full flex-col justify-center sm:flex-row">
                <p class="flex-grow">{{ news.description }}</p>
                <img
                  v-if="news.cover"
                  :src="news.cover"
                  class="h-48 rounded-lg object-cover"
                />
              </div>
            </div>
          </NuxtLink>
        </li>
        <li class="group mb-10 ml-4">
          <NuxtLink href="/news" class="cursor-pointer">
            <span
              class="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-4 border-secondary-900 bg-secondary-50 dark:border-secondary-100 dark:bg-secondary-950"
            >
              <Icon
                name="ph:dots-three-bold"
                size="24"
                class="absolute -left-2 -top-1.5 rotate-90 rounded-full bg-secondary-50 dark:bg-secondary-950"
              />
            </span>
            <span
              class="mb-1 text-sm font-medium leading-none text-main-900 dark:text-main-100"
            >
              Earlier along the line
            </span>
            <h3
              class="text-xl font-black text-primary-800 dark:text-primary-600"
            >
              Check out more
            </h3>
          </NuxtLink>
        </li>
      </ol>
    </ContentList>
    <!-- Research Fields -->
    <h2
      class="mt-6 w-full text-center text-lg font-semibold md:text-xl lg:text-2xl"
    >
      Research Fields
    </h2>
    <div
      class="max-w-8xl container mx-auto my-12 flex flex-wrap items-start justify-center gap-6 px-6 sm:px-8"
    >
      <NuxtLink
        v-for="field in page.fields"
        :key="field.title"
        :href="field.link"
        class="flex w-24 flex-col items-center justify-center md:w-36 lg:w-48"
      >
        <img :src="field.src" />
        <h2 class="pt-1 text-center font-medium sm:pt-2 md:text-lg lg:text-xl">
          {{ field.title }}
        </h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import IndexContent from "@/types/IndexContent";

const { page }: { page: Ref<IndexContent> } = useContent();
const slides = ref(page.value.banners as any[]);
const {
  state: slideState,
  index: slideIndex,
  next: nextSlide,
  prev: prevSlide,
} = useCycleList(slides);
const { pause: pauseAutoSlide, resume: resumeAutoSlide } = useIntervalFn(
  nextSlide,
  5000,
);

defineOgImage({
  title: "Homepage",
  description: "CharmLab at UNC Charlotte",
  // siteLogo: "/logo.svg",
  siteName: "CharmLab",
  icon: "ph:house-duotone",
});
</script>

<style scoped>
.gallery-button {
  @apply inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-200/60 group-hover:bg-accent-200/90 group-focus:outline-none group-focus:ring-4 group-focus:ring-accent-200 dark:bg-accent-600/60 dark:group-hover:bg-accent-600/90 dark:group-focus:ring-accent-600;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}

.v-enter-to,
.v-leave-from {
  @apply opacity-100;
}
</style>
