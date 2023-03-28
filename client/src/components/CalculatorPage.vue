<template>
  <input :value="''" />
  <!-- <div class="r1">
    <div>C</div>
    <div>+/-</div>
    <div>%</div>
    <div>÷</div>
  </div> -->
  <div class="r2">
    <div @click="onClick(7)">7</div>
    <div @click="onClick(8)">8</div>
    <div @click="onClick(9)">9</div>
    <div>*</div>
  </div>
  <div class="r3">
    <div @click="onClick(4)">4</div>
    <div @click="onClick(5)">5</div>
    <div @click="onClick(6)">6</div>
    <div>-</div>
  </div>
  <div class="r4">
    <div @click="onClick(1)">1</div>
    <div @click="onClick(2)">2</div>
    <div @click="onClick(3)">3</div>
    <div>+</div>
  </div>
  <div class="r5">
    <div @click="onClick(0)">0</div>
    <div>.</div>
    <div @click="handleSubmit()">=</div>
  </div>
</template>

<script>


export default {
  name: 'CalculatorPage',
  components: {

  },
  data: () => ({
    value1: 0,
    value2: 0
  }),
  methods: {
    onClick(x) {
      this.value1 = x
      console.log(this.value1)
    },
    handleSubmit() {
      console.log(this.value1 + this.value2)
    }
  }
}
</script>

<style></style>
