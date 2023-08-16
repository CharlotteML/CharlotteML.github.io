<template>
  <div>
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<style>
body {
  @apply bg-main-50 dark:bg-main-950 text-main-950 dark:text-main-50;
}
* {
  @apply transition-all duration-150 font-sans;
}
</style>
