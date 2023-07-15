<script setup lang="ts">
import foo from './foo.svg'

console.log(foo)

/** @deprecated */
const bar = 0
console.log(bar)
</script>

<template>
  <img :src="foo" />
  {{ bar }}
</template>
