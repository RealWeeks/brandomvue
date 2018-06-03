<template>
  <div>
      <navbar-component/>
<h1> TEST </h1>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'User',
  components: {
    'navbar-component': Navbar,

  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
