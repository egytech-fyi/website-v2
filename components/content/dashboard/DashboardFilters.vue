<script setup lang="ts">
  import type { WatchStopHandle } from 'vue'

  // Setting filters initial value from url params
  const { filters, readFiltersFromUrl } = useDashboard()
  const url = useRequestURL()
  readFiltersFromUrl(url)

  // Syncing filters with URL queries for users to share customized links easily
  const { storeFiltersToUrlWatcher } = useDashboard()
  let unwatchFiltersParams: WatchStopHandle
  onMounted(() => {
    unwatchFiltersParams = storeFiltersToUrlWatcher()
  })
  onUnmounted(() => {
    window.history.replaceState(window.history.state, '', window.location.href) // Remove url queries
    unwatchFiltersParams() // Stop watching filters
  })

  // Resetting filters
  const { getInitialFilters } = useDashboard()
  function resetFilters() {
    filters.value = getInitialFilters()
  }

  // Titles options to be passed to TagsCombobox component
  const titlesOptions = [
    { label: 'Frontend Engineer', value: 'frontend' },
    { label: 'Backend Engineer', value: 'backend' },
    { label: 'Full-Stack Engineer', value: 'fullstack' },
    {
      label: `Hardware Engineer (Semiconductors, Digital Design, Electronics, etc)`,
      value: 'hardware',
    },
    { label: 'AI & Automation Engineer', value: 'ai_automation' },
    { label: 'Embedded Systems Engineer', value: 'embedded' },
    { label: 'Mobile Development Engineer', value: 'mobile' },
    { label: 'Security/Network Engineer', value: 'security' },
    { label: 'DevOps / SRE / Platform', value: 'devops_sre_platform' },
    { label: 'QA / SDET Engineer', value: 'testing' },
    { label: 'CRM Developer', value: 'crm' },
    { label: 'Data Analytics', value: 'data_analytics' },
    { label: 'Data Engineer', value: 'data_engineer' },
    { label: 'Data Scientist', value: 'data_scientist' },
    { label: 'Engineering Manager', value: 'engineering_manager' },
    { label: 'Executive (C-level, director, etc.)', value: 'executive' },
    { label: 'UI/UX Designer/Engineer', value: 'ui_ux' },
    { label: 'Product Manager', value: 'product_manager' },
    { label: 'Product Owner', value: 'product_owner' },
    { label: 'Scrum Master', value: 'scrum' },
    { label: 'R&D Engineer (Computer Vision, NLP, etc.)', value: 'research' },
    { label: 'Systems Architect', value: 'system_arch' },
    { label: 'Technical Support', value: 'technical_support' },
  ]
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between gap-2">
      <p class="text-base font-semibold">Filters</p>

      <div class="flex items-center gap-2">
        <UiButton
          class="h-9 gap-2"
          variant="outline"
          size="xs"
          @click="resetFilters"
        >
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
              v-model="filters.personal.salary"
              type="number"
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
              <UiSelectItem value="intern">Intern</UiSelectItem>
              <UiSelectItem value="junior">Junior</UiSelectItem>
              <UiSelectItem value="mid_level">Mid Level</UiSelectItem>
              <UiSelectItem value="senior">Senior</UiSelectItem>
              <UiSelectItem value="staff">Staff</UiSelectItem>
              <UiSelectItem value="senior_staff">Senior Staff</UiSelectItem>
              <UiSelectItem value="principal">Principal</UiSelectItem>
              <UiSelectItem value="senior_principal">
                Senior Principal
              </UiSelectItem>
              <UiSelectItem value="team_lead">Team Lead</UiSelectItem>
              <UiSelectItem value="manager">Manager</UiSelectItem>
              <UiSelectItem value="senior_manager">Senior Manager</UiSelectItem>
              <UiSelectItem value="director">Director</UiSelectItem>
              <UiSelectItem value="group_product_manager">
                Group Product Manager
              </UiSelectItem>
              <UiSelectItem value="vp">VP</UiSelectItem>
              <UiSelectItem value="c-level">C-Level</UiSelectItem>
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
              <UiSelectItem value="male">Male</UiSelectItem>
              <UiSelectItem value="female">Female</UiSelectItem>
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
              <UiSelectItem value="java_script">JavaScript</UiSelectItem>
              <UiSelectItem value="type_script">TypeScript</UiSelectItem>
              <UiSelectItem value="python">Python</UiSelectItem>
              <UiSelectItem value="java">Java</UiSelectItem>
              <UiSelectItem value="c_sharp">C#</UiSelectItem>
              <UiSelectItem value="c_cplusplus">C/C++</UiSelectItem>
              <UiSelectItem value="php">PHP</UiSelectItem>
              <UiSelectItem value="kotlin">Kotlin</UiSelectItem>
              <UiSelectItem value="swift">Swift</UiSelectItem>
              <UiSelectItem value="dart">Dart</UiSelectItem>
              <UiSelectItem value="go">Go</UiSelectItem>
              <UiSelectItem value="r">R</UiSelectItem>
              <UiSelectItem value="scala">Scala</UiSelectItem>
              <UiSelectItem value="rust">Rust</UiSelectItem>
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
              <UiSelectItem value="yes">Yes</UiSelectItem>
              <UiSelectItem value="no">No</UiSelectItem>
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
              <UiSelectItem value="b2b">B2B</UiSelectItem>
              <UiSelectItem value="b2c">B2C</UiSelectItem>
              <UiSelectItem value="both">Both</UiSelectItem>
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
              <UiSelectItem value="product">Product Based</UiSelectItem>
              <UiSelectItem value="software_house">Software House</UiSelectItem>
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
              <UiSelectItem value="large">
                Large/Multinational Enterprise
              </UiSelectItem>
              <UiSelectItem value="medium">Small/Medium Company</UiSelectItem>
              <UiSelectItem value="small">A Start-up</UiSelectItem>
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
              <UiSelectItem value="local">Local</UiSelectItem>
              <UiSelectItem value="regional">Regional</UiSelectItem>
              <UiSelectItem value="global">Global</UiSelectItem>
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
