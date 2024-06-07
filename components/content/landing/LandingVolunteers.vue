<script setup lang="ts">
  const { landing } = useAppConfig()
</script>

<template>
  <section
    class="flex flex-col items-center gap-8 py-16 md:flex-row [&>*]:basis-full"
  >
    <div class="space-y-4">
      <h2 class="text-2xl font-bold md:text-4xl">
        Built by the Community, for the Community
      </h2>

      <p>
        This initiative is powered by volunteers passionate about empowering
        Egyptian tech professionals. We offer insights for tech salaries scene,
        helping you make informed career decisions.
      </p>

      <p>
        Whether you're a Backend Developer, Frontend Developer, Data Analyst,
        Designer, or any other role. You can make a real difference for the
        Egyptian tech community. Help us build something you'll love.
      </p>

      <UILink :to="landing.volunteerFormUrl" target="_blank" variant="secondary">
        <Icon name="ph:users-duotone" class="size-5" />
        <span class="ms-2">Volunteer</span>
      </UILink>
    </div>

    <ul class="grid grid-cols-2 justify-center gap-4 xs:grid-cols-4">
      <li
        v-for="(volunteer, index) in landing.volunteers"
        :key="index"
        class="w-fit justify-self-center"
      >
        <UITooltipProvider :delay-duration="20">
          <UITooltip>
            <UITooltipTrigger>
              <NuxtLink :to="volunteer.link" target="_blank">
                <img
                  :src="volunteer.image"
                  :alt="volunteer.name"
                  width="80"
                  height="80"
                  class="size-20 rounded"
                />
              </NuxtLink>
            </UITooltipTrigger>

            <UITooltipContent>
              <p>{{ volunteer.name }}</p>
            </UITooltipContent>
          </UITooltip>
        </UITooltipProvider>
      </li>
    </ul>
  </section>
</template>
