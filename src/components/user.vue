<template>
  <div style="height: 100%">
    <navbar-component/>
    <div class="css-container">
      <div class="user-img">
        <img :src="url"/>
      </div>
      <div class="submit">ttest</div>
      <div class="sidebar">
        <!-- <h2></h2> -->
        <h3>Contact Details</h3>
        <ul>
          <li>Linkedin</li>
        </ul>
      </div>
      <div class="rightbar">In a rightbar</div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import submitSteps from './submit-steps'

export default {
  name: 'User',
  components: {
    'navbar-component': Navbar,
    'submit-steps' : submitSteps

  },
  methods:{
    revealSubmission(){
      console.log('TITTY');
      this.showForm = !this.showForm
    },
    // changeString(){
    //   this.newMessage = this.msg.toUpperCase()
    // },
  },
  data () {
    return {
      showForm: false,
      url:''
    }
  }
}
</script>

<style scoped>
.css-container{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 20% auto auto 20%;
  grid-template-rows: 20% 20% 20% 20% 700px;
  /* grid-gap: 2px; */
  grid-template-areas:
    "sidebar user user rightbar"
    "sidebar user user rightbar"
    "sidebar user user rightbar"
    "sidebar user user rightbar"
    "sidebar submit submit submit"
}
.user-img{
  grid-area: user;
  /* background-color: blue; */
}
.user-img img{
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
}
/* .text{
  grid-area: foo;
  background-color: red;
} */
.submit{
  grid-area: submit;
  background-color: green;
}
.sidebar{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  grid-area: sidebar;
  background-color:orange;
}
.rightbar{
  grid-area: rightbar;
  background-color:purple;
}

</style>
