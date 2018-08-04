<template>
  <div>
    <navbar-component/>
    <!-- <placeholder @emitSomething="handleEmit" :msg="msg"/> -->
    <splash-header/>

    <!-- <user-component/> -->

  </div>
</template>

<script>
import Navbar from './Navbar'
import Placeholder from './Placeholder'
import splashHeader from './splash-header'
// import User from './user'

export default {
  name: 'Brandom',
  components: {
    'navbar-component': Navbar,
    'placeholder' : Placeholder,
    'splash-header' : splashHeader,
    // 'user-component' : User,

  },
  methods:{
    handleEmit(param1){
      console.log(param1);
    }
  },
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
