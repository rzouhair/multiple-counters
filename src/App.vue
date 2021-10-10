<template>
  <v-app>
    <v-container>
      <MultipleCounters />
    </v-container>
  </v-app>
</template>

<script>
import MultipleCounters from './components/MultipleCounters.vue'
export default {
  name: 'App',
  components: {
    MultipleCounters,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
body {
  font-family: Roboto;
}
</style>