<template>
  <div>
    <button v-on:click="clearItems">clear all</button>
  </div>
</template>

<script>
import { bus } from '../utils/bus.js';
export default {
  methods: {
    clearItems: function() {
      // localStorage.clear();
      this.$emit('clear');
      // bus.$emit('clear');
    }
  }
}
</script>

<style>
</style> 