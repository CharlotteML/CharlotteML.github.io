<template>
  <button
    class="w-8 h-8 relative rounded-full p-1 text-main-950 dark:text-main-50 transition-colors duration-300 shadow ease-in-out focus:outline-none"
    :class="{
      'bg-main-50': !$colorMode.unknown && $colorMode.value === 'light',
      'bg-main-950': !$colorMode.unknown && $colorMode.value === 'dark',
    }"
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
      class="w-full h-full pb-1"
    />
  </button>
</template>
