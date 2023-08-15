<template>
  <NuxtImg :src="refinedSrc" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { withBase } from "ufo";

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const refinedSrc = computed(() => {
  const { src } = props;
  const base = useRuntimeConfig().app.baseURL;

  if (src.startsWith("/") && !src.startsWith("//")) {
    return withBase(src, base);
  }

  return src;
});
</script>
