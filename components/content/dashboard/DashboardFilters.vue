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
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between gap-2">
      <p class="text-base font-semibold">Filters</p>

      <div class="flex items-center gap-2">
        <UiButton class="h-9 gap-2" variant="outline" size="xs">
          <Icon name="ph:arrow-clockwise-duotone" class="size-5" />
          <span>Reset</span>
        </UiButton>
      </div>
    </div>

    <div class="mt-4 space-y-3">
      <!-- Personal & Company Filters -->
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-6">
        <!-- Title -->
        <div class="grid w-full max-w-full items-center gap-1.5">
          <UiLabel class="font-normal" for="title">Title (TODO)</UiLabel>

          <UiInput
            id="title"
            v-model.trim="filters.personal.title"
            type="text"
            class="pe-10"
          />
        </div>

        <!-- Salary -->
        <div class="grid w-full max-w-full items-center gap-1.5">
          <UiLabel class="font-normal" for="salary">Salary</UiLabel>

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
          <UiLabel class="font-normal" for="salary">
            Years of Experience
          </UiLabel>

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
          <UiLabel class="font-normal" for="currentLevel">
            Current Level
          </UiLabel>

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
          <UiLabel class="font-normal" for="gender">Gender</UiLabel>

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
          <UiLabel class="font-normal" for="programmingLanguage">
            Programming Language
          </UiLabel>

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
          <UiLabel class="font-normal" for="csMajor">
            Are you a CS Major
          </UiLabel>

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
          <UiLabel class="font-normal" for="companyBusinessLine">
            Company Business Line
          </UiLabel>

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
          <UiLabel class="font-normal" for="companyBusinessFocus">
            Company Business Focus
          </UiLabel>

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
          <UiLabel class="font-normal" for="companyBusinessSize">
            Company Business Size
          </UiLabel>

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
          <UiLabel class="font-normal" for="companyBusinessMarket">
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
            class="cursor-pointer text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
            class="cursor-pointer text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Include Participants Working Remotely for non-egyptian companies
          </UiLabel>
        </div>
      </div>
    </div>
  </div>
</template>
