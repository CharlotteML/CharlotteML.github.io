<template>
  <header>
    <nav
      class="bg-main-50 border-main-100 px-4 lg:px-6 py-2.5 dark:bg-main-950"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <NuxtLink href="/" class="flex items-center">
          <NuxtImg
            src="/logo.svg"
            alt="UNC Charlotte Logo"
            class="mr-3 h-6 sm:h-9"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-main-50"
            >ML Lab</span
          >
        </NuxtLink>
        <div class="flex items-center lg:order-2">
          <button
            class="nav-bar-button"
            @click="
              $colorMode.preference =
                $colorMode.preference === 'light'
                  ? 'dark'
                  : $colorMode.preference === 'dark'
                  ? 'system'
                  : 'light'
            "
          >
            <Icon
              :name="
                !$colorMode.unknown
                  ? $colorMode.preference === 'dark'
                    ? 'ph:moon'
                    : $colorMode.preference === 'light'
                    ? 'ph:sun'
                    : 'ph:monitor'
                  : 'ph:dots-nine'
              "
              class="w-6 h-6"
            />
          </button>
          <button
            class="nav-bar-button lg:hidden"
            @click="showMenu = !showMenu"
          >
            <span class="sr-only">Open main menu</span>
            <Icon name="ph:list" class="w-6 h-6" />
          </button>
        </div>
        <div
          class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          :class="{ hidden: !showMenu }"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <NuxtLink href="/" class="nav-bar-item">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/news" class="nav-bar-item">News</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/faculty" class="nav-bar-item">Faculty</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/blog" class="nav-bar-item">Blog</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const showMenu = ref(false);
</script>

<style scoped>
.nav-bar-button {
  @apply items-center p-2 ml-1 text-sm text-main-950 rounded-lg  hover:bg-main-100 focus:outline-none focus:ring-2 focus:ring-main-200 dark:text-main-50 dark:hover:bg-main-900 dark:focus:ring-main-800;
}
.nav-bar-item {
  @apply block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-900 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700;
}
</style>
