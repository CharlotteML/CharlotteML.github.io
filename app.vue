<template>
  <div class="scroll-smooth">
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<style>
body {
  @apply bg-secondary-50 text-main-950 dark:bg-secondary-950 dark:text-main-50;
}
* {
  @apply font-sans caret-accent-200 accent-accent-200 transition-all duration-150 dark:caret-accent-600 dark:accent-accent-600;
}
</style>
