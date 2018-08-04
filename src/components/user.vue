<template>
  <div style="height: 100%">
    <navbar-component/>
    <div class="css-container">
      <div class="user-img">
        <!-- <img v-if="!showForm" :src="url"/>
        <div class="submit-area">
          <b-button @click="revealSubmission" size="small">
                Submit
            </b-button>
        </div>
        <submit-steps v-if="showForm"/> -->


        <b-card no-body>
          <b-tabs card v-model="tabIndex">
            <b-tab title="Tab 1" :title-link-class="linkClass(0)">
              <step-one-component/>
            </b-tab>
            <b-tab title="Tab 2" :title-link-class="linkClass(1)">
              Tab Contents 2
            </b-tab>
            <b-tab title="Tab 3" :title-link-class="linkClass(2)">
              Tab Contents 3
            </b-tab>
          </b-tabs>
        </b-card>
      </div>

      <div class="submit">ttest</div>
      <div class="sidebar">
        <sidebar-component/>
        <!-- <h2></h2> -->
        <!-- <h3>Contact Details</h3>
        <ul>
          <li>Linkedin</li>
        </ul> -->

      </div>
      <div class="rightbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg"/>
        <img src="https://pixnio.com/free-images/flora-plants/seeds/kiche-maya-man-from-solola-proudly-shows-a-sample-of-his-snow-pea-harvest-725x544.jpg"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Fujifilm_X100_sample_02.jpg/1599px-Fujifilm_X100_sample_02.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from './Navbar'
import submitSteps from './submit-steps'
import sidebar from './sidebar'
import stepOne from './submit-stages/step-one'

export default {
  name: 'User',
  components: {
    'navbar-component': Navbar,
    'submit-steps' : submitSteps,
    'sidebar-component' : sidebar,
    'step-one-component' : stepOne,

  },
  methods:{
    revealSubmission(){
      console.log('TITTY');
      this.showForm = !this.showForm
    },
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    },
  },
  data () {
    return {
      showForm: false,
      url:'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_1280.jpg',
      tabIndex: 0,
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
    "sidebar user user submit"
}
.user-img{
  grid-area: user;
  /* background-color: blue; */
}
.user-img img{
  width: 100%;
  max-height: 90%;
  display: flex;
  justify-content: flex-start;
}
/* .submit-area .btn{
  width: 100%
} */
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
  overflow: scroll;
}
.rightbar img{
  max-width: 100%;
  max-height: 100%;
}

</style>
