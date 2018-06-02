<template>
  <div>
    <div class='matter-holder'>test placeholder
    </div>
  </div>
</template>

<script>
export default {
  name: 'placeholder',
  watch:{
    user(){
      if (this.user.email) {
        this.$refs.clickTrigger.click()
      }
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
.matter-holder{
  width: 500px;
  height: 500px;
  margin-left: 25%;
}
</style>
