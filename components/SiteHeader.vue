<template>
  <header>
    <nav
      class="bg-main-50 shadow-lg px-4 lg:px-6 py-2.5 dark:bg-main-950 dark:shadow-xl"
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
  @apply items-center p-2 ml-1 rounded-lg text-sm text-main-950 dark:text-main-50  hover:bg-main-100 dark:hover:bg-main-900 focus:outline-none focus:ring-2 focus:ring-main-200 dark:focus:ring-main-800;
}
.nav-bar-item {
  @apply block py-2 pr-4 pl-3 lg:p-0 border-b lg:border-0 text-main-950 dark:text-main-50 dark:hover:text-primary-100 hover:text-primary-900 bg-main-50 hover:bg-main-100 focus:bg-main-100 dark:bg-main-950 dark:hover:bg-main-900 dark:focus:bg-main-900 lg:bg-transparent lg:hover:bg-transparent lg:focus:bg-transparent lg:dark:bg-transparent lg:dark:hover:bg-transparent lg:dark:focus:bg-transparent border-main-200 dark:border-main-800;
}
</style>
