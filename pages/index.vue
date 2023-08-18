<template>
  <div>
    <!-- Carousel  -->
    <div class="relative w-full mb-4 md:mb-8 lg:mb-16">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden md:h-96">
        <Transition>
          <NuxtImg
            :src="slideState.src"
            :key="slideState.src"
            class="absolute block w-full h-full object-cover transition-all duration-700 ease-in-out"
            :class="{ 'opacity-80': $colorMode.value === 'dark' }"
            :alt="slideState.alt || 'Banner image'"
          />
        </Transition>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="prevSlide()"
        @mouseenter="pauseAutoSlide()"
        @mouseleave="resumeAutoSlide()"
      >
        <span class="gallery-button">
          <Icon
            class="w-6 h-6 text-main-950 dark:text-main-50"
            name="ph:caret-left-bold"
          />
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="nextSlide()"
        @mouseenter="pauseAutoSlide()"
        @mouseleave="resumeAutoSlide()"
      >
        <span class="gallery-button">
          <Icon
            class="w-6 h-6 text-main-950 dark:text-main-50"
            name="ph:caret-right-bold"
          />
          <span class="sr-only">Next</span>
        </span>
      </button>
      <Transition>
        <button
          v-if="slideState.title && slideState.link"
          class="absolute bottom-2 left-1/2 -translate-x-1/2 min-w-fit h-10 p-4 rounded-full bg-accent-200/80 dark:bg-accent-600/80 hover:bg-accent-200 dark:hover:bg-accent-600 text-center transition-all duration-300 ease-in-out group focus:outline-none flex items-center justify-center font-bold"
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
        class="absolute -bottom-5 left-1/2 -translate-x-1/2 flex flex-row gap-1 w-32"
      >
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="
            slideState.src === slide.src
              ? 'grow bg-main-950/90 dark:bg-main-50/80'
              : 'flex-none bg-main-950/60 dark:bg-main-50/50'
          "
          @click="slideState.src !== slide.src && nextSlide(index - slideIndex)"
          @mouseenter="pauseAutoSlide()"
          @mouseleave="resumeAutoSlide()"
        ></span>
      </span>
    </div>
    <!-- News -->
    <h2
      class="w-full text-center mt-6 text-lg md:text-xl lg:text-2xl font-semibold"
    >
      What's New
    </h2>
    <ol
      class="max-w-3xl mx-6 md:mx-auto relative border-l-2 border-main-900 dark:border-main-100"
    >
      <li class="mb-10 ml-4 group" v-for="n in news" :key="n.title">
        <NuxtLink :href="n._path" class="cursor-pointer">
          <span
            class="absolute w-4 h-4 border-2 bg-main-50 dark:bg-main-950 rounded-full mt-1 -left-[9px] border-main-900 dark:border-main-100"
          ></span>
          <time
            class="mb-1 text-sm font-medium leading-none text-main-900 dark:text-main-100"
          >
            {{
              useDateFormat(n.date, "MMM DD, YYYY", { locales: "en-US" }).value
            }}
          </time>
          <h3 class="text-xl font-black text-primary-900 dark:text-primary-700">
            {{ n.title }}
          </h3>
          <div
            class="mb-4 text-base font-normal text-main-900/80 dark:text-main-100/80 max-h-0 group-hover:max-h-96 h-fit overflow-hidden transition-all duration-500 ease-linear"
          >
            <div class="flex flex-col sm:flex-row justify-center w-full">
              <p class="flex-grow">{{ n.description }}</p>
              <NuxtImg
                v-if="n.cover"
                :src="n.cover"
                class="h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </NuxtLink>
      </li>
      <li class="mb-10 ml-4 group">
        <NuxtLink href="/news" class="cursor-pointer">
          <span
            class="absolute w-4 h-4 border-4 bg-main-50 dark:bg-main-950 rounded-full mt-1 -left-[9px] border-main-900 dark:border-main-100"
          >
            <Icon
              name="ph:dots-three-bold"
              size="24"
              class="absolute bg-main-50 dark:bg-main-950 rounded-full -left-2 -top-1.5 rotate-90"
            />
          </span>
          <span
            class="mb-1 text-sm font-medium leading-none text-main-900 dark:text-main-100"
          >
            Earlier along the line
          </span>
          <h3 class="text-xl font-black text-primary-900 dark:text-primary-700">
            Check out more
          </h3>
        </NuxtLink>
      </li>
    </ol>
    <!-- Research Fields -->
    <h2
      class="w-full text-center mt-6 text-lg md:text-xl lg:text-2xl font-semibold"
    >
      Research Fields
    </h2>
    <div
      class="container max-w-8xl px-6 sm:px-8 mx-auto flex flex-wrap justify-center items-start gap-6 my-12"
    >
      <span
        v-for="field in page.fields"
        :key="field.title"
        class="flex flex-col justify-center items-center w-24 md:w-36 lg:w-48"
      >
        <NuxtImg :src="field.src" />
        <h2 class="pt-1 sm:pt-2 text-center font-medium md:text-lg lg:text-xl">
          {{ field.title }}
        </h2>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const slides = ref(page.value.banners as any[]);
const {
  state: slideState,
  index: slideIndex,
  next: nextSlide,
  prev: prevSlide,
} = useCycleList(slides);
const { pause: pauseAutoSlide, resume: resumeAutoSlide } = useIntervalFn(
  nextSlide,
  5000
);
const news = await queryContent("news").sort({ date: -1 }).limit(5).find();
</script>

<style scoped>
.gallery-button {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-200/60 dark:bg-accent-600/60 group-hover:bg-accent-200/90 dark:group-hover:bg-accent-600/90 group-focus:ring-4 group-focus:ring-accent-200 dark:group-focus:ring-accent-600 group-focus:outline-none;
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
