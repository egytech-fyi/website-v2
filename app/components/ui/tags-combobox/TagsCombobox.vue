<script setup lang="ts">
  import {
    ComboboxAnchor,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxPortal,
    ComboboxRoot,
    ComboboxTrigger,
    ComboboxViewport,
  } from 'radix-vue'

  type UiTagsComboboxProps = {
    options: Array<{ value: string; label: string }>
    placeholder?: string
  }
  const { options, placeholder = '' } = defineProps<UiTagsComboboxProps>()

  // selectedOptions model value (consumed in parent by v-model directive)
  const selectedOptions = defineModel<string[]>({ default: () => [] })

  // Combobox state
  const isComboboxOpen = ref(false)
  const searchTerm = ref('')
  const filteredOptions = computed(() =>
    options.filter((i) => !selectedOptions.value.includes(i.label)),
  )

  // Updating selected options
  type AcceptableValue = string | number | boolean | Record<string, any>
  type SelectEvent<T> = CustomEvent<{
    originalEvent: PointerEvent
    value?: T
  }>
  function handleOptionSelect(ev: SelectEvent<AcceptableValue>) {
    if (typeof ev.detail.value === 'string') {
      searchTerm.value = ''
      selectedOptions.value = [...selectedOptions.value, ev.detail.value]
    }

    if (filteredOptions.value.length === 0) {
      isComboboxOpen.value = false
    }
  }

  function getOptionLabel(value: AcceptableValue) {
    const selectedOption = options.find((o) => o.value === value)
    return selectedOption?.label || ''
  }
</script>

<template>
  <UiTagsInput
    class="w-full gap-0 px-0"
    :model-value="selectedOptions"
    :display-value="getOptionLabel"
  >
    <div class="flex flex-wrap items-center gap-2 px-3">
      <UiTagsInputItem
        v-for="item in selectedOptions"
        :key="item"
        :value="item"
        class="h-auto"
      >
        <UiTagsInputItemText class="line-clamp-2" />
        <UiTagsInputItemDelete />
      </UiTagsInputItem>
    </div>

    <ComboboxRoot
      v-model="selectedOptions"
      v-model:open="isComboboxOpen"
      v-model:searchTerm="searchTerm"
      class="w-full"
    >
      <ComboboxAnchor class="flex items-center px-2">
        <ComboboxInput :placeholder as-child>
          <UiTagsInputInput
            class="w-full px-3"
            :class="selectedOptions.length > 0 ? 'mt-2' : ''"
          />

          <ComboboxTrigger>
            <Icon name="radix-icons:chevron-down" class="size-4" />
          </ComboboxTrigger>
        </ComboboxInput>
      </ComboboxAnchor>

      <ComboboxPortal>
        <ComboboxContent
          position="popper"
          class="z-50 mt-2 max-h-[300px] w-[--radix-popper-anchor-width] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          <ComboboxViewport>
            <ComboboxEmpty class="py-6 text-center text-sm" />

            <ComboboxGroup
              class="[&_[cmdk-group-heading]]:text-muted-foreground, overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium"
            >
              <ComboboxItem
                v-for="option in filteredOptions"
                :key="option.value"
                :value="option.value"
                class="data-[disabled]:opacity-50, relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent"
                @select.prevent="handleOptionSelect"
              >
                {{ option.label }}
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
  </UiTagsInput>
</template>
