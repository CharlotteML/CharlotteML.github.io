<template>
  <div>
    <h2
      class="mt-6 w-full text-center text-lg font-semibold md:text-xl lg:text-2xl"
    >
      What's going on here at ML Lab
    </h2>
    <ContentList
      path="/news/"
      v-slot="{ list }"
      :query="{ sort: [{ date: -1 }], where: [{ _partial: false }] }"
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
              class="mb-1 text-sm font-medium leading-none text-main-900 dark:text-main-100"
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
          <span
            class="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-4 border-secondary-900 bg-secondary-50 dark:border-secondary-100 dark:bg-secondary-950"
          >
            <Icon
              name="ph:arrow-line-down"
              size="24"
              class="absolute -left-2 -top-1.5 rounded-full bg-secondary-50 dark:bg-secondary-950"
            />
          </span>
          <span
            class="mb-1 text-sm font-medium leading-none text-main-900 dark:text-main-100"
          >
            You've reached the bottom of the hill
          </span>
        </li>
      </ol>
    </ContentList>
  </div>
</template>
