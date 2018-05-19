<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Brandom</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown v-if="!user.email" right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>Sign In/Up</em>
          </template>
          <b-dropdown-item v-b-modal.signIn href="#">Sign In/Up</b-dropdown-item>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown v-else right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>{{user.email}}</em>
          </template>
          <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
          <b-dropdown-item @click="handleSignOut">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <b-modal id="signIn" ref="SignInModal" title="Sign In">
    <b-input-group prepend="Email">
      <b-form-input v-model="email"></b-form-input>
      <b-input-group-append>
        <!-- <b-btn variant="info">Button</b-btn> -->
      </b-input-group-append>
    </b-input-group>

    <b-input-group prepend="Password">
      <b-form-input  type="password" v-model="password"></b-form-input>
      <b-input-group-append>
        <!-- <b-btn variant="info">Button</b-btn> -->
      </b-input-group-append>
    </b-input-group>
    <div slot="modal-footer" class="w-100">
         <!-- <p class="float-left">Modal Footer Content</p> -->
         <b-btn @click="handleSignIn" size="sm" class="float-right" variant="primary">
           Sign In
         </b-btn>
         <b-btn @click="handleSignUp" size="sm" class="float-right" variant="primary">
           Sign Up
         </b-btn>
       </div>
    </b-modal>
  </b-modal>
</div>
</template>

<script>
import axios from 'axios'
import GlobalMixin from '../mixins/global-mixin.vue'
export default {

  name: 'navbar-component',
  mixins:[GlobalMixin],
  methods:{
    handleSignOut(){
      debugger
      axios({
        method: 'delete',
        url: `/sign-out/${this.user.id}`,
        baseURL: "http://localhost:4741",
        headers: {'Authorization': `Token token=${this.user.token}`}
      })
      .then((response)=>{
        if (response.status === 204) {
          this.addUser({})
          this.showInfoMessage({
            title: 'Signed Out',
            message: 'Out have been signed out.',
          })
        }else{
          return Promise.reject(err)
        }
      })
      .catch((err)=>{
        this.handleError(err)
      })
    },
    addUser(user) {
      this.$store.dispatch('addUser', user)
    },
    handleSignUp(){
      let context = this;
      axios({
        method: 'post',
        url: '/sign-up',
        baseURL: "http://localhost:4741",
        data: {
          credentials:{
            email: this.email,
            password: this.password,
            password_confirmation: this.password
          }
        }
      })
      .then((response)=>{
        if (response.status===201) {
          this.showSuccessMessage({
            title: 'Success',
            message: 'Sign Up Successful!',
          })

          this.handleSignIn(response)
        }else{
          return Promise.reject(response)
        }
      })
      .catch((error)=>{
        this.handleError(error)
      })
    },
    handleSignIn(){
      axios({
        method: 'post',
        url: '/sign-in',
        baseURL: "http://localhost:4741",
        data: {
          credentials:{
            email: this.email,
            password: this.password,
          }
        }
      })
      .then((response)=>{
        this.addUser(response.data.user)
        if (response.status === 200) {
          this.showSuccessMessage({
            title: 'Success',
            message: 'Signed In',
          })
          this.$refs.SignInModal.hide()
        }else{
          return Promise.reject(err)
        }
      })
      .catch((err)=>{
        this.handleError(err)
      })
    },
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
  },
  data () {
    return {
      email:'',
      password:'',
      email:'',
      id:null,
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
