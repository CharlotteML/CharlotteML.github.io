<template>
  <div class="flex min-h-screen flex-col scroll-smooth">
    <SiteHeader />
    <NuxtPage class="grow" />
    <SiteFooter />
  </div>
</template>

<style>
@reference "~/assets/css/main.css";
body {
  @apply bg-secondary-50 text-main-950 dark:bg-secondary-950 dark:text-main-50;
}
* {
  @apply font-sans caret-accent-200 accent-accent-200 transition-all duration-150 dark:caret-accent-600 dark:accent-accent-600;
}
</style>
