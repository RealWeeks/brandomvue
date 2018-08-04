<template>
  <div>
    <div class="tab-head">
      <h1 class="step-two">What Mockup Did You Use?</h1>
    </div>
    <div class="question-body">
      <div class="question-one">
        <font-awesome-icon class="die" icon="dice-one"/>
      </div>
    </div>

    <div class="type-body">
      <multiselect
        open-direction="bottom"
        v-model="selected"
        :options="options">
      </multiselect>
    </div>

  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    'Multiselect': Multiselect,
  },
  methods:{
    mockupChoice(choice){
    }
  },
  watch:{
    selected(item){
      this.$emit('addMockup', item)
    }
  },
  data () {
    return {
        selected: null,
        options: ['Energy Drink Can', 'Cigarette Pack', 'Software Box'],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.tab-head{
  display: flex;
  justify-content: center;
}
.question-body{
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 25px;
}
.die{
  font-size: 35px;
}
.type-body{
  display: flex;
}
  /* .step-one {
    display: flex;
    grid-area: user;
    background-color: cyan;
  } */

</style>
