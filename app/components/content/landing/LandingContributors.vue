<script setup lang="ts"></script>

<template>
  <section
    class="flex flex-col items-center gap-8 py-16 md:flex-row [&>*]:basis-full"
  >
    <div class="space-y-4">
      <h2 class="text-2xl font-bold md:text-4xl">
        Built by the Community, for the Community
      </h2>

      <p>
        This initiative is powered by contributors passionate about empowering
        Egyptian tech professionals. We offer insights for tech salaries scene,
        helping you make informed career decisions.
      </p>

      <p>
        Whether you're a Backend Developer, Frontend Developer, Data Analyst,
        Designer, or any other role. You can make a real difference for the
        Egyptian tech community. Help us build something you'll love.
      </p>

      <UiLink to="/community/contribute" variant="secondary">
        <Icon name="i-ph-git-pull-request-duotone" class="size-5" />
        <span class="ms-2">Contribute</span>
      </UiLink>
    </div>

    <ul
      class="grid grid-cols-2 justify-center gap-4 2xs:grid-cols-3 xs:grid-cols-4"
    >
      <li
        v-for="contributorPlaceholder in 8"
        :key="contributorPlaceholder"
        class="w-fit justify-self-center"
      >
        <UiTooltipProvider :delay-duration="20">
          <UiTooltip>
            <UiTooltipTrigger>
              <NuxtImg
                src="/user-img-placeholder.svg"
                aria-hidden
                width="80"
                height="80"
                class="size-20 rounded"
              />
            </UiTooltipTrigger>

            <UiTooltipContent>
              <p>This could be you!</p>
            </UiTooltipContent>
          </UiTooltip>
        </UiTooltipProvider>
      </li>
    </ul>
  </section>
</template>
