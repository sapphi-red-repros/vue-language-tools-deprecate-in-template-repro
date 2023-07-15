<script setup lang="ts">
import foo from './foo.svg'

console.log(foo)
</script>

<template>
  <img :src="foo" />
</template>
