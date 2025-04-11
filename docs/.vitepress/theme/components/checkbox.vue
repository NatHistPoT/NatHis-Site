<template>
  <span class="custom-checkbox" :class="{ checked: isChecked }">
    <svg
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path
        v-if="isChecked"
        fill-rule="evenodd"
        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
      ></path>
      <path v-else fill-rule="evenodd" d="M0 0h16v16H0z" fill="none"></path>
    </svg>
  </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  checked: {
    type: [Boolean, String],
    default: false,
  },
});

const isChecked = computed(() => {
  if (typeof props.checked === "string") {
    return props.checked.toLowerCase() === "true";
  }
  return props.checked;
});
</script>

<style scoped>
.custom-checkbox {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  border: 1px solid var(--vp-c-border, rgba(125, 125, 125, 0.4));
  border-radius: 3px;
  background-color: var(--vp-c-bg-alt, #f8f8f8);
  vertical-align: middle;
}

:global(.dark) .custom-checkbox {
  background-color: var(--vp-c-bg-alt, #242424);
}

.custom-checkbox.checked {
  background-color: var(--vp-c-brand, #3c2489);
  border-color: var(--vp-c-brand, #3c2489);
}

.custom-checkbox svg {
  display: block;
  color: white;
}
</style>
