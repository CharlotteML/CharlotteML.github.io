<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <section>
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1
                class="mb-4 text-9xl tracking-tight font-extrabold lg:text-9xl text-primary-800 dark:text-primary-600"
              >
                404
              </h1>
              <p
                class="mb-4 text-3xl tracking-tight font-bold text-main-950 md:text-4xl dark:text-main-50"
              >
                Oops! Page missing.
              </p>
              <p
                class="mb-4 text-lg font-light text-main-900 dark:text-main-100"
              >
                How did you get here? Let's get you back to the homepage.
              </p>
              <NuxtLink
                href="/"
                class="inline-flex text-white bg-primary-800 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800 my-4"
              >
                Back to Homepage
              </NuxtLink>
              <p
                class="mt-4 text-lg font-light text-main-900/80 dark:text-main-100/80"
              >
                Or if you think this is a mistake, please contact us using the
                information at the bottom of the page.
              </p>
            </div>
          </div>
        </section>
      </template>
      <template #empty>
        <section>
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1
                class="mb-4 text-9xl tracking-tight font-extrabold lg:text-9xl text-primary-800 dark:text-primary-600"
              >
                204
              </h1>
              <p
                class="mb-4 text-3xl tracking-tight font-bold text-main-950 md:text-4xl dark:text-main-50"
              >
                Hmmm... Why is this page empty?
              </p>
              <p
                class="mb-4 text-lg font-light text-main-900 dark:text-main-100"
              >
                You can report this problem to us. Or let's just go back to the
                homepage.
              </p>
              <NuxtLink
                href="/"
                class="inline-flex text-white bg-primary-800 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800 my-4"
              >
                Back to Homepage
              </NuxtLink>
            </div>
          </div>
        </section>
      </template>
    </ContentDoc>
  </main>
</template>
