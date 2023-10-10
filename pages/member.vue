<template>
  <main class="relative mr-32 mt-0.5 min-h-screen px-6 lg:mx-auto lg:max-w-3xl">
    <aside
      class="fixed right-2 top-1/2 z-40 mb-0 h-3/4 w-36 -translate-y-1/2 rounded-lg rounded-b-lg bg-secondary-50/90 py-0 backdrop-blur-sm dark:bg-secondary-950/70"
    >
      <ul class="flex h-full w-full flex-col gap-1 rounded-xl p-2">
        <li
          v-if="faculty.length"
          class="nav min-h-0 rounded-lg border border-primary-800 bg-primary-800/30 text-sm"
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
    <ul class="flex flex-col gap-6 pt-6">
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
import Person from "@/types/Person";

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
const cmpFaculty = (a: Person, b: Person) => {
  const positionMap = (p: string) => {
    switch (p) {
      case "Lab Director":
        return 0;
      case "Lab Co-Director":
        return 1;
      case "Professor":
        return 2;
      case "Associate Professor":
        return 3;
      case "Assistant Professor":
        return 4;
      default:
        return 5;
    }
  };
  const aTier = a.position.map(positionMap).sort()[0];
  const aName = concatName(a.name.first, a.name.middle, a.name.last);
  const bTier = b.position.map(positionMap).sort()[0];
  const bName = concatName(b.name.first, b.name.middle, b.name.last);
  return aTier - bTier || aName.localeCompare(bName);
};
const cmpStudent = (a: Person, b: Person) => {
  const positionMap = (p: string) => {
    switch (p) {
      case "PhD Student":
        return 0;
      case "Masters Student":
        return 1;
      default:
        return 2;
    }
  };
  const aTier = a.position.map(positionMap).sort()[0];
  const aName = concatName(a.name.first, a.name.middle, a.name.last);
  const bTier = b.position.map(positionMap).sort()[0];
  const bName = concatName(b.name.first, b.name.middle, b.name.last);
  return aTier - bTier || aName.localeCompare(bName);
};
const cmpPerson = (a: Person, b: Person) => {
  const aName = concatName(a.name.first, a.name.middle, a.name.last);
  const bName = concatName(b.name.first, b.name.middle, b.name.last);
  return aName.localeCompare(bName);
};

const {
  page,
}: { page: Ref<{ faculty: Person[]; student: Person[]; alumni: Person[] }> } =
  useContent();
const faculty = page.value.faculty.sort(cmpFaculty);
const student = page.value.student.sort(cmpStudent);
const alumni = page.value.alumni.sort(cmpPerson);

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

defineOgImage({
  title: "Members",
  description: "Meet the stars at CharmLab",
  // siteLogo: "/logo.svg",
  siteName: "CharmLab",
  icon: "ph:users-duotone",
});
</script>

<style>
.nav {
  @apply flex items-center justify-center border-primary-800 p-2 py-2;
}
.inactive {
  @apply max-w-none flex-grow-0 overflow-hidden border-l text-center text-sm delay-75;
}
.active {
  @apply flex-grow border-l-4 text-center delay-75;
}
</style>
