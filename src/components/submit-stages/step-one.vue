<template>
  <div>
    <div class="tab-head">
      <h1 class="step-one">How many brands?</h1>
    </div>
    <div class="question-body">
      <div class="question-one">
        <font-awesome-icon @click="handleChoice(1)" class="die" icon="dice-one" />
      </div>
      <div class="question-one">
        <font-awesome-icon @click="handleChoice(2)" class="die" icon="dice-two" />
      </div>
    </div>

    <div class="type-body">
      <multiselect
        v-if="show1"
        open-direction="bottom"
        v-model="selected"
        :options="options">
      </multiselect>
      <multiselect
        v-if="show2"
        open-direction="bottom"
        v-model="selected2"
        :options="options2">
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
  created(){
    // debugger;
  },
  watch:{
    selected(item){
      this.$emit('addBrand',item)
    },
    selected2(item){
      this.$emit('addBrandAdditional',item)
    }
  },
  methods:{
    handleChoice(choice){
      this.show1 = false
      this.show2 = false
      if (choice === 1) {
        this.show1 = true;
      }else{
        this.show2 = true;
        this.show1 = true;
      }
    }
  },
  data () {
    return {
        selected: null,
        options: ['McDonalds', 'Boy Scouts of America', 'xBox'],
        selected2: null,
        options2: ['Other 1', 'Other2', 'Other3'],
        show1: false,
        show2: false,
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
