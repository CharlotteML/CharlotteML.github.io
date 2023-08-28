<template>
  <div
    class="flex flex-col rounded-lg border border-secondary-100 bg-secondary-100/50 dark:border-secondary-900 dark:bg-secondary-900/30"
  >
    <div class="flex flex-col items-center sm:flex-row">
      <img
        class="mt-4 h-48 w-48 flex-shrink-0 rounded-full object-cover sm:mt-0 sm:rounded-none sm:rounded-br-lg sm:rounded-tl-lg"
        :src="person.photo || '/logo-full.svg'"
        :alt="
          [person.name.first, person.name.middle, person.name.last].join(' ')
        "
      />
      <div
        class="flex h-fit flex-col items-center justify-between gap-y-2 p-4 leading-normal sm:h-48 sm:items-start sm:gap-y-0"
      >
        <h2 class="text-2xl font-bold tracking-tight">
          {{
            [person.name.first, person.name.middle, person.name.last].join(" ")
          }}
          -
          {{ person.position.join(", ") }}
        </h2>
        <h3
          class="text-lg font-semibold tracking-tight text-main-900 dark:text-main-100"
        ></h3>
        <p
          class="flex w-1/2 flex-row flex-wrap justify-center gap-x-1 font-normal text-secondary-800 dark:text-secondary-200 sm:w-full sm:justify-start"
        >
          <span> Research: </span>
          <span v-for="(research, i) in person.research">
            {{ i == person.research.length ? research : research + ", " }}
          </span>
        </p>
        <div
          class="flex flex-row flex-wrap text-sm font-light text-secondary-800 dark:text-secondary-200"
        >
          <a
            :href="person.contact.website"
            v-if="person.contact.website"
            class="w-full min-w-[50%] text-center sm:w-fit sm:text-left"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <Icon name="ph:globe" class="mb-0.5 ml-1 h-4 w-4" />
            {{ person.contact.website }}
          </a>
          <a
            :href="`mailto:${email}`"
            v-for="email in person.contact.email"
            class="w-full min-w-[50%] text-center sm:w-fit sm:text-left"
          >
            <Icon name="ph:envelope" class="mb-0.5 ml-1 h-4 w-4" />
            {{ email }}
          </a>
          <a
            :href="`tel:+1-${phone}`"
            v-for="phone in person.contact.phone"
            class="w-full min-w-[50%] text-center sm:w-fit sm:text-left"
          >
            <Icon name="ph:phone" class="mb-0.5 ml-1 h-4 w-4" />
            {{ phone }}
          </a>
          <span
            v-if="person.contact.address"
            class="w-full min-w-[50%] text-center sm:w-fit sm:text-left"
          >
            <Icon name="ph:house" class="mb-0.5 ml-1 h-4 w-4" />
            {{ person.contact.address }}
          </span>
        </div>
      </div>
    </div>
    <div class="my-4 h-fit w-full px-6">
      <p class="text-justify text-lg">
        <ContentSlot>
          {{ person.introduction }}
        </ContentSlot>
      </p>
      <div
        class="my-4 w-full border-t border-dashed"
        v-if="person.teaching?.length"
      ></div>
      <ul v-if="person.teaching?.length">
        <li v-for="course in person.teaching" class="list-inside list-disc">
          {{ course.course }} - {{ course.title }} ({{ course.term }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Person from "types/Person";

defineProps({
  person: {
    type: Object as PropType<Person>,
    required: true,
  },
});
</script>

<style scoped></style>
