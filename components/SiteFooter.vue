<template>
  <footer
    class="m-4 rounded-lg border border-accent-200 bg-secondary-50 shadow-lg dark:border-accent-600 dark:bg-secondary-950 dark:shadow-xl"
  >
    <div
      class="mx-auto grid w-full max-w-screen-xl grid-cols-1 p-4 md:grid-cols-3 md:items-center md:justify-between"
    >
      <span
        class="mx-auto mt-3 flex flex-col items-start text-sm font-medium text-main-900 dark:text-main-200 sm:mt-0"
      >
        <span class="text-base">Machine Learning Lab</span>
        <span>
          <Icon name="ph:envelope" class="mr-1" />
          <a :href="`mailto:${contactEmail}`" class="hover:underline">
            {{ contactEmail }}
          </a>
        </span>
        <span>
          <Icon name="ph:phone" class="mr-1" />
          <a :href="`tel:+1-${contactPhone}`" class="hover:underline">
            {{ contactPhone }}
          </a>
        </span>
        <span class="flex flex-row">
          <Icon name="ph:house" class="mr-1 mt-1" />
          <span class="flex flex-wrap gap-1">
            <span>Woodward Hall,</span>
            <span>8723 Cameron Blvd,</span>
            <span>Charlotte, NC 28262</span>
          </span>
        </span>
      </span>
      <img
        src="/logo-full.svg"
        alt="UNC Charlotte logo"
        class="mx-auto w-full max-w-xs"
      />
      <span
        class="mx-auto flex flex-wrap justify-center gap-1 text-center text-sm text-main-900 dark:text-main-200"
      >
        <span>
          © 2023
          <NuxtLink href="/" class="hover:underline">UNC Charlotte</NuxtLink>.
        </span>
        <span>All Rights Reserved.</span>
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const contactEmail = "contact@charlotte.edu";
const contactPhone = "704-687-2000";
</script>
