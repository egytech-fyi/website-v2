<script setup lang="ts">
  const { landing } = useAppConfig()
</script>

<template>
  <section class="grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
    <!-- Feeling underpaid because you lack accurate market data? -->
    <div class="card">
      <UiButton size="icon" variant="secondary" class="cursor-auto">
        <Icon name="ph:hand-arrow-down-duotone" class="size-5" />
      </UiButton>

      <h3 class="card-heading">
        Feeling underpaid because you lack accurate market data?
      </h3>

      <p>
        You're not alone. Without reliable salary information, it's hard to
        negotiate fair compensation. But with access to up-to-date data, you can
        confidently advocate for yourself and secure the pay you deserve. Don't
        settle for less! empower yourself with the knowledge to thrive in your
        tech career.
      </p>

      <UiLink class="card-cta gap-2" to="/2024/dashboard">
        <Icon name="ph:chart-bar-duotone" class="size-5" />
        <span>Access Dashboard</span>
      </UiLink>
    </div>

    <!-- Do you feel we need more accurate data? Participate to the initiative! -->
    <div class="card">
      <UiButton size="icon" variant="secondary" class="cursor-auto">
        <Icon name="ph:hand-arrow-down-duotone" class="size-5" />
      </UiButton>

      <h3 class="card-heading">
        Do you feel we need more accurate data? Participate to the initiative!
      </h3>

      <p>
        If you haven't already participated in the survey, now's the time to
        share your insights. Your participation helps us gather comprehensive
        data that drives meaningful change in the tech industry.
      </p>

      <UiLink
        :to="landing.participation.formLink"
        target="_blank"
        class="card-cta gap-2"
        variant="outline"
      >
        <span>Participate Now</span>
        <Icon name="ph:caret-right-duotone" class="size-5" />
      </UiLink>
    </div>

    <!-- Do you feel this is helpful? -->
    <div class="card col-span-full">
      <UiButton size="icon" variant="secondary" class="cursor-auto">
        <Icon name="ph:hand-arrow-down-duotone" class="size-5" />
      </UiButton>

      <h3 class="card-heading">Do you feel this is helpful?</h3>

      <p>
        In order to continue running this we find ourselves need to hire
        freelancers (hence this minimal design). Please consider making a
        donation! This is a not-for-profit initiative and any donation you make
        will go to keep this running. You can donate from outside or inside
        Egypt.
      </p>

      <div class="card-cta flex flex-col gap-2 xs:flex-row">
        <!-- Stripe -->
        <UiLink
          :to="landing.donation.stripe.link"
          target="_blank"
          class="justify-start gap-2"
          variant="outline"
        >
          <Icon name="ph:stripe-logo-duotone" class="size-5" />
          <span>Donate with Stripe</span>
        </UiLink>

        <!-- Instapay -->
        <UiDialog>
          <UiDialogTrigger as-child>
            <UiButton class="h-9 gap-2" variant="outline">
              <Icon name="InstapayDuotone" class="size-5" />
              <span>Donate with Instapay</span>
            </UiButton>
          </UiDialogTrigger>

          <UiDialogContent class="rounded-lg sm:max-w-[520px]">
            <UiDialogHeader>
              <UiDialogTitle>Donate with Instapay</UiDialogTitle>
            </UiDialogHeader>

            <p>
              Thanks for your donation! Kindly send to
              <span class="font-bold text-muted-foreground">
                {{landing.donation.instapay.ipa}}@instapay
              </span>
              and make sure to add
              <span class="font-bold text-muted-foreground">{{landing.donation.instapay.referenceNote}}</span>
              in the reference notes.
            </p>

            <UiDialogFooter>
              <UiButton type="submit">Ok</UiButton>
            </UiDialogFooter>
          </UiDialogContent>
        </UiDialog>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .card {
    @apply flex flex-col gap-3 items-start border rounded-lg py-4 px-8;

    .card-heading {
      @apply text-lg font-semibold;
    }

    .card-cta {
      @apply mt-auto;
    }
  }
</style>
