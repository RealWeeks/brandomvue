<template>
  <div>
    <div class="tab-head">
      <h1 class="step-two">Give Your Project a Title</h1>
    </div>
    <div class="question-body">
      <div class="question-one">
        <font-awesome-icon class="die" icon="dice-one"/>
      </div>
    </div>

    <div class="type-body">
      <b-input-group>
        <b-input-group-text slot="append">
            <strong class="text-danger">!</strong>
        </b-input-group-text>
        <b-form-input v-model="projectName" ></b-form-input>
      </b-input-group>
      <!-- <multiselect
        v-if="show2"
        open-direction="bottom"
        v-model="selected2"
        :options="options2">
      </multiselect> -->
    </div>

  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    'Multiselect': Multiselect,
  },
  watch:{
    projectName(name){
      this.$emit('addProjectname', name)
    },
  },
  methods:{
    mockupChoice(choice){


    }
  },
  data () {
    return {
        projectName:'',
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
