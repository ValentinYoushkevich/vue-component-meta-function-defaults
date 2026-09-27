<script setup lang="ts">
defineProps({
  // examples from https://vuejs.org/guide/components/props.html#prop-validation
  propE: { type: Object, default(rawProps: any) { return { message: 'hello' }; } },
  propF: { type: Function, default() { return 'Default function'; } },
  // arrow default of a function prop is the value itself, not a factory
  fn: { type: Function, default: (x: number) => x * 2 },
});
</script>

<template>
  <div />
</template>
