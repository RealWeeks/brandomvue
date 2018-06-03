<template>
  <div style="height: 100%">
    <navbar-component/>
    <div class="css-container">
      <div class="header">test</div>
      <div class="text">test</div>
      <div class="submit">ttest</div>
      <div class="sidebar">In a sidebar</div>
    </div>
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

<style scoped>
.css-container{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 20% auto auto auto;
  grid-template-rows: auto;
  grid-template-areas:
    "sidebar header header header"
    "sidebar header header header"
    "sidebar foo foo foo"
    "sidebar submit submit submit"
    "sidebar submit submit submit"
}
.header{
  grid-area: header;
  background-color: blue;
}
.text{
  grid-area: foo;
  background-color: red;
}
.submit{
  grid-area: submit;
  background-color: green;
}
.sidebar{
  grid-area: sidebar;
  background-color:orange;
}

</style>
