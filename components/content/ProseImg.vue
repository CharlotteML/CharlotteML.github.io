<template>
  <component
    :is="isMP4 || isWebM || isMOV ? 'video' : 'img'"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :type="
      isMP4
        ? 'video/mp4'
        : isWebM
        ? 'video/webm'
        : isMOV
        ? 'video/mov'
        : undefined
    "
    :controls="isMP4 || isWebM || isMOV"
    :autoplay="isMP4 || isWebM || isMOV"
    :loop="isMP4 || isWebM || isMOV"
  ></component>
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

const isMP4 = computed(() => props.src.endsWith(".mp4"));
const isWebM = computed(() => props.src.endsWith(".webm"));
const isMOV = computed(() => props.src.endsWith(".mov"));

const refinedSrc = computed(() => {
  const { src } = props;
  const base = useRuntimeConfig().app.baseURL;

  if (src.startsWith("/") && !src.startsWith("//")) {
    return withBase(src, base);
  }

  return src;
});
</script>
