<template>
  <div class="scroll-smooth">
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<style>
body {
  @apply bg-secondary-50 dark:bg-secondary-950 text-main-950 dark:text-main-50;
}
* {
  @apply transition-all duration-150 font-sans accent-accent-200 dark:accent-accent-600 caret-accent-200 dark:caret-accent-600;
}
</style>
