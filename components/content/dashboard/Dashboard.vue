<script setup lang="ts">
  const filters = ref({
    personal: {
      title: 'frontend',
      salary: '',
      yearsOfExperience: { from: '', to: '' },
      currentLevel: '',
      gender: '',
      programmingLanguage: '',
      csMajor: '',
    },
    company: {
      businessFocus: '',
      businessLine: '',
      businessSize: '',
      businessMarket: '',
    },
    participants: {
      relocated: false,
      remote: false,
    },
  })

  const isOpen = ref(true)
</script>

<template>
  <div class="space-y-16">
    <!-- Filters -->
    <UiCollapsible v-model:open="isOpen" class="space-y-4">
      <div class="flex items-center justify-between gap-2">
        <p class="text-2xl font-semibold">Filters</p>

        <div class="flex items-center gap-2">
          <UiButton class="h-9 gap-2" variant="outline">
            <Icon name="ph:arrow-clockwise-duotone" class="size-5" />
            <span>Reset</span>
          </UiButton>

          <UiCollapsibleTrigger as-child>
            <UiButton class="h-9 gap-2" variant="outline">
              <Icon name="ph:caret-up-down-duotone" class="size-5" />
              <span>{{ isOpen ? 'Hide' : 'Show' }}</span>
            </UiButton>
          </UiCollapsibleTrigger>
        </div>
      </div>

      <UiCollapsibleContent class="space-y-3">
        <!-- Personal & Company Filters -->
        <div
          class="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-3"
        >
          <!-- Title -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="title">Title (TODO)</UiLabel>

            <UiInput
              id="title"
              v-model.trim="filters.personal.title"
              type="text"
              class="pe-10"
            />
          </div>

          <!-- Salary -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="salary">Salary</UiLabel>

            <div class="relative">
              <UiInput
                id="salary"
                v-model.trim="filters.personal.salary"
                type="text"
                class="pe-10"
              />
              <span
                class="absolute inset-y-0 end-0 flex items-center justify-center px-2 text-muted-foreground"
              >
                EGP
              </span>
            </div>
          </div>

          <!-- Years of Experience -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="salary">Years of Experience</UiLabel>

            <div class="flex items-center gap-2">
              <!-- From -->
              <div class="relative">
                <span
                  class="absolute inset-y-0 start-0 flex items-center justify-center px-2 text-muted-foreground"
                >
                  From
                </span>

                <UiInput
                  id="yearsOfExperienceFrom"
                  v-model.trim="filters.personal.yearsOfExperience.from"
                  type="text"
                  class="ps-12"
                />
              </div>

              <!-- To -->
              <div class="relative">
                <span
                  class="absolute inset-y-0 start-0 flex items-center justify-center px-2 text-muted-foreground"
                >
                  To
                </span>

                <UiInput
                  id="yearsOfExperienceTo"
                  v-model.trim="filters.personal.yearsOfExperience.to"
                  type="text"
                  class="ps-8"
                />
              </div>
            </div>
          </div>

          <!-- Current Level -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="currentLevel">Current Level</UiLabel>

            <UiSelect id="currentLevel" v-model="filters.personal.currentLevel">
              <UiSelectTrigger class="w-full">
                <UiSelectValue placeholder="Nothing selected" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectItem value="1">Intern</UiSelectItem>
                <UiSelectItem value="2">Junior</UiSelectItem>
                <UiSelectItem value="3">Mid Level</UiSelectItem>
                <UiSelectItem value="4">Senior</UiSelectItem>
                <UiSelectItem value="5">Staff</UiSelectItem>
                <UiSelectItem value="6">Senior Staff</UiSelectItem>
                <UiSelectItem value="7">Principal</UiSelectItem>
                <UiSelectItem value="8">Senior Principal</UiSelectItem>
                <UiSelectItem value="9">Team Lead</UiSelectItem>
                <UiSelectItem value="10">Manager</UiSelectItem>
                <UiSelectItem value="11">Senior Manager</UiSelectItem>
                <UiSelectItem value="12">Director</UiSelectItem>
                <UiSelectItem value="13">Group Product Manager</UiSelectItem>
                <UiSelectItem value="14">VP</UiSelectItem>
                <UiSelectItem value="15">C-Level</UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>

          <!-- Gender -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="gender">Gender</UiLabel>

            <UiSelect id="gender" v-model="filters.personal.gender">
              <UiSelectTrigger class="w-full">
                <UiSelectValue placeholder="Nothing selected" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectItem value="1">Male</UiSelectItem>
                <UiSelectItem value="2">Female</UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>

          <!-- Programming Language -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="programmingLanguage">Programming Language</UiLabel>

            <UiSelect
              id="programmingLanguage"
              v-model="filters.personal.programmingLanguage"
            >
              <UiSelectTrigger class="w-full">
                <UiSelectValue placeholder="Nothing selected" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectItem value="1">JavaScript</UiSelectItem>
                <UiSelectItem value="2">TypeScript</UiSelectItem>
                <UiSelectItem value="3">C#</UiSelectItem>
                <UiSelectItem value="4">C/C++</UiSelectItem>
                <UiSelectItem value="5">PHP</UiSelectItem>
                <UiSelectItem value="6">Kotlin</UiSelectItem>
                <UiSelectItem value="7">Swift</UiSelectItem>
                <UiSelectItem value="8">Dart</UiSelectItem>
                <UiSelectItem value="9">Go</UiSelectItem>
                <UiSelectItem value="10">R</UiSelectItem>
                <UiSelectItem value="11">Scala</UiSelectItem>
                <UiSelectItem value="12">Rust</UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>

          <!-- CS Major -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="csMajor">Are you a CS Major</UiLabel>

            <UiSelect id="csMajor" v-model="filters.personal.csMajor">
              <UiSelectTrigger class="w-full">
                <UiSelectValue placeholder="Nothing selected" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectItem value="1">Yes</UiSelectItem>
                <UiSelectItem value="2">No</UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>

          <!-- Company Business Line -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="companyBusinessLine">Company Business Line</UiLabel>

            <UiSelect
              id="companyBusinessLine"
              v-model="filters.company.businessLine"
            >
              <UiSelectTrigger class="w-full">
                <UiSelectValue placeholder="Nothing selected" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectItem value="1">B2B</UiSelectItem>
                <UiSelectItem value="2">B2C</UiSelectItem>
                <UiSelectItem value="3">Both</UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>

          <!-- Company Business Focus -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="companyBusinessFocus">Company Business Focus</UiLabel>

            <UiSelect
              id="companyBusinessFocus"
              v-model="filters.company.businessFocus"
            >
              <UiSelectTrigger class="w-full">
                <UiSelectValue placeholder="Nothing selected" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectItem value="1">Product Based</UiSelectItem>
                <UiSelectItem value="2">Software House</UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>

          <!-- Company Business Size -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="companyBusinessSize">Company Business Size</UiLabel>

            <UiSelect
              id="companyBusinessSize"
              v-model="filters.company.businessSize"
            >
              <UiSelectTrigger class="w-full">
                <UiSelectValue placeholder="Nothing selected" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectItem value="1">
                  A Large Enterprise/Multinational Company
                </UiSelectItem>
                <UiSelectItem value="2">
                  A Small and Medium Enterprise
                </UiSelectItem>
                <UiSelectItem value="3">A Start-up</UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>

          <!-- Company Business Market -->
          <div class="grid w-full max-w-full items-center gap-1.5">
            <UiLabel for="companyBusinessMarket">
              Company Business Market
            </UiLabel>

            <UiSelect
              id="companyBusinessMarket"
              v-model="filters.company.businessMarket"
            >
              <UiSelectTrigger class="w-full">
                <UiSelectValue placeholder="Nothing selected" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectItem value="1">Local</UiSelectItem>
                <UiSelectItem value="2">Regional</UiSelectItem>
                <UiSelectItem value="3">Global</UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>
        </div>

        <!-- Participants Filters -->
        <div class="space-y-3">
          <!-- Relocated -->
          <div class="flex items-center space-x-2">
            <UiCheckbox
              id="participantsRelocated"
              v-model:checked="filters.participants.relocated"
            />
            <UiLabel
              for="participantsRelocated"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include Relocated Participants
            </UiLabel>
          </div>

          <!-- Remote -->
          <div class="flex items-center space-x-2">
            <UiCheckbox
              id="participantsRemote"
              v-model:checked="filters.participants.remote"
            />
            <UiLabel
              for="participantsRemote"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include Participants Working Remotely for non-egyptian companies
            </UiLabel>
          </div>
        </div>
      </UiCollapsibleContent>
    </UiCollapsible>

    <!-- Salaries Percentile -->
    <div class="space-y-4">
      <p class="text-2xl font-semibold">Salaries Percentile</p>

      <div class="space-y-8 text-center">
        <div>
          <p class="text-4xl font-bold text-accent-foreground">20,000 EGP</p>
          <p class="text-2xl">Median</p>
        </div>

        <ul
          class="grid w-full grid-cols-1 gap-3 2xs:grid-cols-2 xs:grid-cols-4"
        >
          <li class="flex flex-col gap-1.5">
            <span
              class="h-1.5 w-full rounded-full bg-accent-foreground/40"
            ></span>
            <p class="font-semibold">13K EGP</p>
            <span>20TH %</span>
          </li>

          <li class="flex flex-col gap-1.5">
            <span
              class="h-1.5 w-full rounded-full bg-accent-foreground/60"
            ></span>
            <p class="font-semibold">13K EGP</p>
            <span>20TH %</span>
          </li>

          <li class="flex flex-col gap-1.5">
            <span class="h-1.5 w-full rounded-full bg-accent-foreground"></span>
            <p class="font-semibold">13K EGP</p>
            <span>20TH %</span>
          </li>

          <li class="flex flex-col gap-1.5">
            <span class="h-1.5 w-full rounded-full bg-accent"></span>
            <p class="font-semibold">71</p>
            <span>Participants</span>
          </li>
        </ul>

        <div
          class="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p class="text-start">
            You are in the lower range of salaries. 50% of the participants earn
            more than you. Try using more filters to narrow the result to
            participants with the same criteria as you 🔍
          </p>

          <UiLink
            to="/community/participate"
            class="h-9 gap-2"
            variant="outline"
          >
            <Icon name="ph:pencil-simple-duotone" class="size-5" />
            Share your salary
          </UiLink>
        </div>
      </div>
    </div>

    <!-- Salary Range Distribution  -->
    <div class="space-y-4">
      <div>
        <p class="text-2xl font-semibold">
          Salary Range Distribution Among Participants
        </p>
        <p class="text-muted-foreground">
          Identify your position in salary spectrum
        </p>
      </div>

      <ContentChartBar
        :labels="[
          '3-6K',
          '6-9K',
          '9-12K',
          '12-15K',
          '15-20K',
          '20-25K',
          '25-30K',
          '30-35K',
          '45-40K',
          '40-45K',
          '45-50K',
          '50-60K',
          '60-70K',
          '70-100K',
          '100-120K',
          '140-160K',
        ]"
        :series="[
          {
            name: 'Number of Participants',
            data: [4, 17, 15, 15, 23, 12, 14, 13, 8, 8, 11, 8, 6, 6, 6, 1],
          },
        ]"
      />

      <Alert icon="ph:info">
        Checkout our
        <a
          href="https://lookerstudio.google.com/reporting/fc89c7a2-5dd9-4954-afc3-3ea7f3c7241a/page/DUS6C?s=qk7232SNGS4"
          target="_blank"
          class="underline"
        >
          2022 Salary Dashboard
        </a>
        and compare the market after EGP devaluation!
      </Alert>
    </div>

    <!-- Gender Salary Comparison -->
    <div class="space-y-4">
      <div>
        <p class="text-2xl font-semibold">Gender Salary Comparison</p>
        <p class="text-muted-foreground">
          Exploring Salaries disparities between genders
        </p>
      </div>

      <ContentChartLine
        :y-axis-percentage="true"
        :labels="[
          '3-6K',
          '6-9K',
          '9-12K',
          '12-15K',
          '15-20K',
          '20-25K',
          '25-30K',
          '30-35K',
          '45-40K',
          '40-45K',
          '45-50K',
          '50-60K',
          '60-70K',
          '70-100K',
          '140-160K',
        ]"
        :series="[
          {
            name: 'Male',
            data: [
              2.48, 9.92, 1.8, 12.2, 2.48, 9.92, 1.8, 12.2, 2.48, 9.92, 1.8,
              12.2, 2.48, 9.92, 1.8,
            ],
          },
          {
            name: 'Female',
            data: [
              27.4, 52.2, 1.4, 18.7, 27.4, 52.2, 1.4, 18.7, 27.4, 52.2, 1.4,
              18.7, 27.4, 52.2, 1.4,
            ],
          },
        ]"
        :options="{
          xaxis: {
            title: { text: 'Total Month Net Salary in EGP (Basic + Bonus)' },
          },
          yaxis: { title: { text: 'Percentage of Participants' } },
        }"
      />

      <Alert icon="ph:info">
        Checkout our
        <a
          href="https://ranasamir.hashnode.dev/egypts-tech-scene-unequal-pay-in-the-tech-market"
          target="_blank"
          class="underline"
        >
          2022 Unequal Pay in the Tech Market
        </a>
        report and wait for the updated one!
      </Alert>
    </div>
  </div>
</template>
