<template>
  <div>

    <div class='matter-holder'><p :class="{'blue':hidden}">{{userInput}}</p>
      <b-input-group>
        <b-form-input v-model='userInput' type='text'></b-form-input>
      </b-input-group>
      <b-button @click="handleClick('some data')">I am a Button</b-button>
      <!-- {{videos.video}} -->
      <!-- <ul v-for="item in videos.video">
        <!-- {{item}} -->


    </div>
  </div>
</template>

<script>
export default {
  name: 'placeholder',
  props:['msg'],
  created(){
    // this.changeString()
  },
  methods:{
    handleClick(text){
      // debugger;
      // let text = "bob"
      this.$emit('emitSomething', text)
    },
    // changeString(){
    //   this.newMessage = this.msg.toUpperCase()
    // },
  },
  data () {
    return {
      userInput: '',
      hidden: false,
      // newMessage: '',
    }
  },
  watch:{
    user(){
      if (this.user.email) {
        this.$refs.clickTrigger.click()
      }
    },
    userInput(input){
      if (input === 'hide') {
        this.hidden = !this.hidden
      }
    },
  },
  computed:{
    newMsg(){
      return this.msg.toUpperCase()
    },
    user(){
      return this.$store.state.user
    },

  }
}
</script>


<style scoped>
.blue{
  color: blue;
}
.matter-holder{
  width: 500px;
  height: 500px;
  margin-left: 25%;
}
</style>
