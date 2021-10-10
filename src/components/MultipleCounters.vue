<template>
  <v-card class="counters__container">
    <h1 class="counters__title title">Multiple counters component</h1>

    <v-container>
      <template v-for="counter in counters">
        <ClickCounter :key="counter.id" v-model="counter.value" />
      </template>
    </v-container>

    <v-btn color="primary" elevation="3" @click="addCounter">ADD A COUNTER :)</v-btn>

    <div v-if="counters.length > 1" class="counters__sum">
      <p class="subtitle-1">The sum of all the counters is equal to 
        <v-chip>{{ countersSum }}</v-chip> !
      </p>
      <p class="caption">(I am rendered only if there is more than one counter...)</p>
    </div>
  </v-card>
</template>

<script>
import ClickCounter from './ClickCounter.vue'

export default {
  components: {
    ClickCounter,
  },
  computed: {
    countersSum() {
      let sum = 0
      for (let i = 0; i < this.counters.length; i++) {
        sum += this.counters[i].value
      }
      return sum
      /*
        Or: return this.counters.map(({value}) => value).reduce((a, b) => a + b)
      */
    }
  },
  data() {
    return {
      counters: [
        { id: this.$uuid.v4(), value: 0, }
      ],
      sum: 0,
    }
  },
  methods: {
    addCounter() {
      this.counters.push({ id: this.$uuid.v4(), value: 0, })
    }
  }
}
</script>

<style lang="scss" scoped>
.counters {
  &__container {
    margin: 50px;
    padding: 15px 30px;
    text-align: center;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__sum {
    margin-top: 15px;
    p {
      margin: 0;
      font-weight: 500;
    }
  }
}
</style>