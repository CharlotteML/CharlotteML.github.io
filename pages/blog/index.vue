<template>
  <div>
    <h2
      class="w-full text-center mt-6 text-lg md:text-xl lg:text-2xl font-semibold my-6"
    >
      See what we're up to
    </h2>
    <ContentList
      path="/blog"
      v-slot="{ list }"
      :query="{ sort: [{ date: -1 }] }"
    >
      <ol class="max-w-3xl mx-6 md:mx-auto relative">
        <li class="mb-10 ml-4" v-for="blog in list" :key="blog.slug">
          <NuxtLink
            :href="blog._path"
            class="flex flex-col mx-auto items-center bg-secondary-100/80 dark:bg-secondary-900/10 hover:bg-secondary-50 dark:hover:bg-secondary-950 border border-accent-200 dark:border-accent-600 rounded-lg shadow md:flex-row md:max-w-2xl overflow-hidden"
          >
            <img
              class="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none"
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
    </ContentList>
  </div>
</template>
