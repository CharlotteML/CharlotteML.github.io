<template>
  <main class="relative mx-auto mt-0.5 min-h-screen max-w-3xl px-6">
    <aside
      class="sticky top-0 z-40 mb-2 h-20 w-full rounded-b-lg bg-secondary-100/30 py-4 backdrop-blur-sm dark:bg-secondary-900/10 lg:fixed lg:right-2 lg:top-1/2 lg:mb-0 lg:h-3/4 lg:w-36 lg:-translate-y-1/2 lg:rounded-lg lg:py-0"
    >
      <ul class="flex h-full w-full flex-row gap-1 rounded-xl p-2 lg:flex-col">
        <li
          v-if="faculty.length"
          class="nav rounded-lg border border-primary-800 bg-primary-800/30 text-sm"
        >
          Faculty
        </li>
        <li
          v-if="faculty.length"
          v-for="(f, i) in faculty"
          :key="'aside' + f.name.first + f.name.middle + f.name.last"
          class="nav"
          :class="facFocus[i] ? 'active' : 'inactive'"
        >
          <NuxtLink
            :to="`#${idFromName(f.name.first, f.name.middle, f.name.last)}`"
          >
            {{
              facFocus[i]
                ? concatName(f.name.first, f.name.middle, f.name.last)
                : abbrevName(f.name.first, f.name.middle, f.name.last)
            }}
          </NuxtLink>
        </li>
        <li
          v-if="student.length"
          class="nav rounded-lg border border-primary-800 bg-primary-800/30 text-sm"
        >
          Student
        </li>
        <li
          v-if="student.length"
          v-for="(s, i) in student"
          :key="'aside' + s.name.first + s.name.middle + s.name.last"
          class="nav"
          :class="stuFocus[i] ? 'active' : 'inactive'"
        >
          <NuxtLink
            :to="`#${idFromName(s.name.first, s.name.middle, s.name.last)}`"
          >
            {{
              stuFocus[i]
                ? concatName(s.name.first, s.name.middle, s.name.last)
                : abbrevName(s.name.first, s.name.middle, s.name.last)
            }}
          </NuxtLink>
        </li>
        <li
          v-if="alumni.length"
          class="nav rounded-lg border border-primary-800 bg-primary-800/30 text-sm"
        >
          Alumni
        </li>
        <li
          v-if="alumni.length"
          v-for="(a, i) in alumni"
          :key="'aside' + a.name.first + a.name.middle + a.name.last"
          class="nav"
          :class="aluFocus[i] ? 'active' : 'inactive'"
        >
          <NuxtLink
            :to="`#${idFromName(a.name.first, a.name.middle, a.name.last)}`"
          >
            {{
              aluFocus[i]
                ? concatName(a.name.first, a.name.middle, a.name.last)
                : abbrevName(a.name.first, a.name.middle, a.name.last)
            }}
          </NuxtLink>
        </li>
      </ul>
    </aside>
    <ul class="flex flex-col gap-6 pt-0 lg:pt-6">
      <li
        v-for="f in faculty"
        :key="idFromName(f.name.first, f.name.middle, f.name.last)"
        :id="idFromName(f.name.first, f.name.middle, f.name.last)"
        ref="facRefs"
        class="scroll-m-24"
      >
        <MemberCard :person="f" />
      </li>
      <li
        v-for="s in student"
        :key="idFromName(s.name.first, s.name.middle, s.name.last)"
        :id="idFromName(s.name.first, s.name.middle, s.name.last)"
        ref="stuRefs"
        class="scroll-m-24"
      >
        <MemberCard :person="s" />
      </li>
      <li
        v-for="a in alumni"
        :key="idFromName(a.name.first, a.name.middle, a.name.last)"
        :id="idFromName(a.name.first, a.name.middle, a.name.last)"
        ref="aluRefs"
        class="scroll-m-24"
      >
        <MemberCard :person="a" />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import Person from "types/Person";

const idFromName = (
  first: string | null,
  middle: string | null,
  last: string | null,
) => {
  return [first, middle, last].filter((x) => x).join("");
};
const concatName = (
  first: string | null,
  middle: string | null,
  last: string | null,
) => {
  return [first, middle, last].filter((x) => x).join(" ");
};
const abbrevName = (
  first: string | null,
  middle: string | null,
  last: string | null,
) => {
  return [first, middle, last]
    .map((x) => x?.charAt(0))
    .filter((x) => x)
    .join(" ");
};

const {
  page,
}: { page: Ref<{ faculty: Person[]; student: Person[]; alumni: Person[] }> } =
  useContent();
const faculty = page.value.faculty;
const student = page.value.student;
const alumni = page.value.alumni;

const stuRefs = ref([] as HTMLElement[]);
const facRefs = ref([] as HTMLElement[]);
const aluRefs = ref([] as HTMLElement[]);

const facFocus = ref(faculty.map(() => false));
const stuFocus = ref(student.map(() => false));
const aluFocus = ref(alumni.map(() => false));

onMounted(() => {
  facRefs.value.map((f, i) =>
    useIntersectionObserver(f, ([{ isIntersecting }]) => {
      facFocus.value[i] = isIntersecting;
    }),
  );
  stuRefs.value.map((s, i) =>
    useIntersectionObserver(s, ([{ isIntersecting }]) => {
      stuFocus.value[i] = isIntersecting;
    }),
  );
  aluRefs.value.map((a, i) =>
    useIntersectionObserver(a, ([{ isIntersecting }]) => {
      aluFocus.value[i] = isIntersecting;
    }),
  );
});
</script>

<style>
.nav {
  @apply flex items-center justify-center border-primary-800 p-2 py-4 lg:py-2;
}
.inactive {
  @apply max-w-[10px] flex-grow-0 overflow-hidden border-t text-sm delay-75 lg:max-w-none lg:border-l lg:border-t-0;
}
.active {
  @apply flex-grow border-t-4 delay-75 lg:border-l-4 lg:border-t-0;
}
</style>
