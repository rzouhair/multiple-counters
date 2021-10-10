<template>
  <div class="counter__container">
    <v-btn elevation="3" @click="incrementCounter" >CLICK HERE TO INCREMENT</v-btn>
    <v-chip
      class="counter__avatar"
      :color="value <= 10 ? 'grey darken-4' : 'red darken-1'"
      text-color="white"
      size="35"
    >
      {{ value }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    }
  },
  methods: {
    incrementCounter() {
      this.$emit('input', this.value + 1)
    },
  }
}
</script>

<style lang="scss">
.counter {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>