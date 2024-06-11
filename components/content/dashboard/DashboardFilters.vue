<script setup lang="ts">
  const { filters } = useDashboard()

  const titlesOptions = [
    { label: 'Frontend Engineer', value: '1' },
    { label: 'Backend Engineer', value: '2' },
    { label: 'Full-Stack Engineer', value: '3' },
    {
      label: `Hardware Engineer (Semiconductors, Digital Design, Electronics, etc)`,
      value: 'hardware',
    },
    { label: 'AI & Automation Engineer', value: '4' },
    { label: 'Embedded Systems Engineer', value: '5' },
    { label: 'Mobile Development Engineer', value: '6' },
    { label: 'Security/Network Engineer', value: '7' },
    { label: 'DevOps / SRE / Platform', value: '8' },
    { label: 'QA / SDET Engineer', value: '9' },
    { label: 'CRM Developer', value: '10' },
    { label: 'Data Analytics', value: '11' },
    { label: 'Data Engineer', value: '12' },
    { label: 'Data Scientist', value: '13' },
    { label: 'Engineering Manager', value: '14' },
    { label: 'Executive (C-level, director, etc.)', value: '15' },
    { label: 'UI/UX Designer/Engineer', value: '16' },
    { label: 'Product Manager', value: '17' },
    { label: 'Product Owner', value: '18' },
    { label: 'Scrum Master', value: '19' },
    { label: 'R&D Engineer (Computer Vision, NLP, etc.)', value: '20' },
    { label: 'Systems Architect', value: '21' },
    { label: 'Technical Support', value: '22' },
  ]
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
          <UiLabel class="font-normal" for="title">Title</UiLabel>
          <UiTagsCombobox
            v-model="filters.personal.titles"
            :options="titlesOptions"
            placeholder="Search or select"
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
          <UiLabel class="font-normal">Years of Experience</UiLabel>

          <!-- From -->
          <div class="flex items-center gap-1">
            <UiLabel class="min-w-[4ch] font-normal text-muted-foreground">
              From
            </UiLabel>
            <UiNumberField
              id="yoeFrom"
              v-model="filters.personal.yearsOfExperience.from"
              :min="0"
              :max="filters.personal.yearsOfExperience.to - 1"
            >
              <UiNumberFieldContent>
                <UiNumberFieldDecrement />
                <UiNumberFieldInput />
                <UiNumberFieldIncrement />
              </UiNumberFieldContent>
            </UiNumberField>
          </div>

          <!-- To -->
          <div class="flex items-center gap-1">
            <UiLabel class="min-w-[4ch] font-normal text-muted-foreground">
              To
            </UiLabel>
            <UiNumberField
              id="yoeTo"
              v-model="filters.personal.yearsOfExperience.to"
              :min="filters.personal.yearsOfExperience.from + 1"
            >
              <UiNumberFieldContent>
                <UiNumberFieldDecrement />
                <UiNumberFieldInput />
                <UiNumberFieldIncrement />
              </UiNumberFieldContent>
            </UiNumberField>
          </div>
        </div>

        <!-- Level -->
        <div class="grid w-full max-w-full items-center gap-1.5">
          <UiLabel class="font-normal" for="level">Level</UiLabel>

          <UiSelect id="level" v-model="filters.personal.level">
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
          <UiLabel class="font-normal" for="csDegree">
            Are you a CS Major
          </UiLabel>

          <UiSelect id="csDegree" v-model="filters.personal.csDegree">
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

        <!-- Remote Abroad -->
        <div class="flex items-center space-x-2">
          <UiCheckbox
            id="participantsRemoteAbroad"
            v-model:checked="filters.participants.remoteAbroad"
          />
          <UiLabel
            for="participantsRemoteAbroad"
            class="cursor-pointer text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Include Participants Working Remotely for non-egyptian companies
          </UiLabel>
        </div>
      </div>
    </div>
  </div>
</template>
