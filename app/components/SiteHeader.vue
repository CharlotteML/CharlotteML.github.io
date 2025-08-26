<template>
  <header class="z-50">
    <nav
      class="border-b border-accent-200 bg-secondary-50 px-4 py-2.5 shadow dark:border-accent-600 dark:bg-secondary-950 dark:shadow-lg lg:px-6"
    >
      <div
        class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between"
      >
        <NuxtLink href="/" class="flex items-center">
          <img
            src="/logo.svg"
            alt="UNC Charlotte Logo"
            class="mr-3 h-6 sm:h-12"
          />
          <span
            class="self-center whitespace-nowrap text-xl font-semibold text-primary-800"
          >
            CharMLab
          </span>
        </NuxtLink>
        <div class="flex items-center pl-16 lg:order-2">
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
              class="h-6 w-6"
            />
          </button>
          <button
            class="nav-bar-button lg:hidden"
            @click="showMenu = !showMenu"
          >
            <span class="sr-only">Open main menu</span>
            <Icon name="ph:list" class="h-6 w-6" />
          </button>
        </div>
        <div
          class="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          :class="{ hidden: !showMenu }"
        >
          <ul
            class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8"
          >
            <li v-for="nvi in navBarItems">
              <NuxtLink :href="nvi.href" class="nav-bar-item">
                {{ nvi.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const showMenu = ref(false);
const navBarItems = ref([
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publication" },
  { name: "Members", href: "/member" },
  { name: "Teaching", href: "/teaching" },
  { name: "Blog", href: "/blog" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]);
</script>

<style scoped>
.nav-bar-button {
  @apply ml-1 items-center rounded-lg p-2 text-sm text-main-950 hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-secondary-200 dark:text-main-50 dark:hover:bg-secondary-950 dark:focus:ring-secondary-800;
}
.nav-bar-item {
  @apply block border-b border-secondary-200 bg-secondary-50 py-2 pl-3 pr-4 text-main-950 hover:bg-secondary-100 hover:text-primary-800 focus:bg-secondary-100 dark:border-secondary-800 dark:bg-secondary-950 dark:text-main-50 dark:hover:bg-secondary-900 dark:hover:text-primary-600 dark:focus:bg-secondary-900 lg:border-0 lg:bg-transparent lg:p-0 lg:hover:bg-transparent lg:focus:bg-transparent lg:dark:bg-transparent lg:dark:hover:bg-transparent lg:dark:focus:bg-transparent;
}
</style>
