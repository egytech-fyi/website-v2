<script setup lang="ts">
  import {
    ComboboxAnchor,
    ComboboxInput,
    ComboboxPortal,
    ComboboxRoot,
    ComboboxTrigger,
  } from 'radix-vue'

  type UiTagsComboboxProps = {
    options: Array<{ value: string; label: string }>
    placeholder?: string
  }
  const { options, placeholder = '' } = defineProps<UiTagsComboboxProps>()

  // selectedOptionsValues is the model value consumed in parent by v-model directive
  const selectedOptionsValues = defineModel<string[]>({ default: () => [] })
  // selectedOptionsLabels is value we internally use to show labels in tags input and sync it with selectedOptionsValues
  const selectedOptionsLabels = ref<string[]>([])

  // Combobox state
  const isComboboxOpen = ref(false)
  const searchTerm = ref('')
  const filteredOptions = computed(() =>
    options.filter((i) => !selectedOptionsLabels.value.includes(i.label)),
  )

  // Updating selected options
  type AcceptableValue = string | number | boolean | Record<string, any>
  type SelectEvent<T> = CustomEvent<{
    originalEvent: PointerEvent
    value?: T
  }>
  function handleOptionSelect(ev: SelectEvent<AcceptableValue>) {
    const selectedOptionLabel = ev.detail.value
    if (typeof selectedOptionLabel === 'string') {
      searchTerm.value = ''
      selectedOptionsLabels.value.push(selectedOptionLabel)
    }

    if (filteredOptions.value.length === 0) {
      isComboboxOpen.value = false
    }
  }

  // Syncing `selectedOptionsValues` with `selectedOptionsLabels`
  watch(
    selectedOptionsLabels,
    (newVal) => {
      selectedOptionsValues.value = newVal.map((label) => {
        const option = options.find((o) => o.label === label)
        return option?.value ?? ''
      })
    },
    { deep: true },
  )
</script>

<template>
  <UiTagsInput class="w-full gap-0 px-0" :model-value="selectedOptionsLabels">
    <div class="flex flex-wrap items-center gap-2 px-3">
      <UiTagsInputItem
        v-for="item in selectedOptionsLabels"
        :key="item"
        :value="item"
        class="h-auto"
      >
        <UiTagsInputItemText class="line-clamp-2" />
        <UiTagsInputItemDelete />
      </UiTagsInputItem>
    </div>

    <ComboboxRoot
      v-model="selectedOptionsLabels"
      v-model:open="isComboboxOpen"
      v-model:searchTerm="searchTerm"
      class="w-full"
    >
      <ComboboxAnchor class="flex items-center px-2">
        <ComboboxInput :placeholder as-child>
          <UiTagsInputInput
            class="w-full px-3"
            :class="selectedOptionsLabels.length > 0 ? 'mt-2' : ''"
          />

          <ComboboxTrigger>
            <Icon name="radix-icons:chevron-down" class="size-4" />
          </ComboboxTrigger>
        </ComboboxInput>
      </ComboboxAnchor>

      <ComboboxPortal>
        <UiCommandList
          position="popper"
          class="mt-2 w-[--radix-popper-anchor-width] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          <UiCommandEmpty />
          <UiCommandGroup>
            <UiCommandItem
              v-for="option in filteredOptions"
              :key="option.value"
              :value="option.label"
              @select.prevent="handleOptionSelect"
            >
              {{ option.label }}
            </UiCommandItem>
          </UiCommandGroup>
        </UiCommandList>
      </ComboboxPortal>
    </ComboboxRoot>
  </UiTagsInput>
</template>
