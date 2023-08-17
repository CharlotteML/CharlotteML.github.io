<template>
  <div>
    <h2
      class="w-full text-center mt-6 text-lg md:text-xl lg:text-2xl font-semibold"
    >
      What's going on here at ML Lab
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
        <span
          class="absolute w-4 h-4 border-4 bg-main-50 dark:bg-main-950 rounded-full mt-1 -left-[9px] border-main-900 dark:border-main-100"
        >
          <Icon
            name="ph:arrow-line-down"
            size="24"
            class="absolute bg-main-50 dark:bg-main-950 rounded-full -left-2 -top-1.5"
          />
        </span>
        <span
          class="mb-1 text-sm font-medium leading-none text-main-900 dark:text-main-100"
        >
          You've reached the bottom of the hill
        </span>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const news = await queryContent("news").sort({ date: -1 }).find();
</script>

<style scoped></style>
