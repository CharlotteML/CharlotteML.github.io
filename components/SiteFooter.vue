<template>
  <footer
    class="bg-main-50 dark:bg-main-950 border border-accent-200 dark:border-accent-600 rounded-lg shadow-lg dark:shadow-xl m-4"
  >
    <div
      class="w-full mx-auto max-w-screen-xl p-4 grid grid-cols-1 md:grid-cols-3 md:items-center md:justify-between"
    >
      <span
        class="flex flex-col items-start mt-3 mx-auto sm:mt-0 text-sm font-medium text-main-900 dark:text-main-200"
      >
        <span class="text-base">Machine Learning Lab</span>
        <span>
          <Icon name="ph:envelope" class="mr-1" />
          <a :href="`mailto:${contactEmail}`" class="hover:underline">{{
            contactEmail
          }}</a>
        </span>
        <span>
          <Icon name="ph:phone" class="mr-1" />
          <a :href="`tel:+1-${contactPhone}`" class="hover:underline">{{
            contactPhone
          }}</a>
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
      <NuxtImg
        src="/logo-full.svg"
        alt="UNC Charlotte logo"
        class="w-full max-w-xs mx-auto"
      />
      <span
        class="text-sm text-main-900 dark:text-main-200 text-center mx-auto flex flex-wrap gap-1 justify-center"
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
