<template>
  <div>
    <navbar-component></navbar-component>
    test
  </div>
</template>

<script>
import Navbar from './Navbar'
// import Placeholder from './Placeholder'

export default {
  name: 'Submission',
  components: {
    'navbar-component': Navbar,
    // 'placeholder' : Placeholder
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
