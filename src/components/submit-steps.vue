<template>
  <div>
    TEST
    <step-one/>
    <!-- <step-2  v-if="showForm"/>
    <step-3  v-if="showForm"/>
    <step-4  v-if="showForm"/>
    <step-5  v-if="showForm"/> -->

  </div>
</template>

<script>
import stepOne from './submit-stages/step-one'

export default {
  name: 'submitSteps',
  components: {
    'step-one': stepOne,


  },
  methods:{
    // revealSubmission(){
    //   console.log('TITTY');
    //   this.showForm = !this.showForm
    //
    // },
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step-one {
  display: flex;
  grid-area: user;
  background-color: cyan;
}


</style>
