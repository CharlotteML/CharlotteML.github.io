<template>
  <main>
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-9xl font-extrabold tracking-tight text-primary-800 dark:text-primary-600 lg:text-9xl"
          >
            404
          </h1>
          <p
            class="mb-4 text-3xl font-bold tracking-tight text-main-950 dark:text-main-50 md:text-4xl"
          >
            Oops! Page missing.
          </p>
          <p class="mb-4 text-lg font-light text-main-900 dark:text-main-100">
            How did you get here? Let's get you back to the homepage.
          </p>
          <NuxtLink
            href="/"
            class="my-4 inline-flex rounded-lg bg-primary-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-800 dark:focus:ring-primary-800"
          >
            Back to Homepage
          </NuxtLink>
          <p
            class="mt-4 text-lg font-light text-main-900/80 dark:text-main-100/80"
          >
            Or if you think this is a mistake, please contact us using the
            information at the bottom of the page.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// OG meta
const title = "What's going on?";
const description = "How did you get here? Why even share this page?";
const icon = "ph:egg-crack-duotone";
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
