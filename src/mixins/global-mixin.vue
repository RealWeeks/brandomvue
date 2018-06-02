<script>
export default {
    name: 'GlobalMixin',
    data () {
      //...
    },
    methods: {
      handleError(err){
        debugger;
      },
      // $axios(type, path, params, token){
      //
      //   axios({
      //     method: 'delete',
      //     url: `/sign-out/${this.user.id}`,
      //     baseURL: "http://localhost:4741",
      //     headers: {'Authorization': `Token token=${this.user.token}`}
      //   })
      //   .then((response)=>{
      //     if (response.status === 204) {
      //       this.addUser({})
      //       this.showInfoMessage({
      //         title: 'Signed Out',
      //         message: 'Out have been signed out.',
      //       })
      //     }else{
      //       return Promise.reject(err)
      //     }
      //   })
      //   .catch((err)=>{
      //     this.handleError(err)
      //   })
      // }
      //...
    },
    notifications: {
      showLoginError: { // You can have any name you want instead of 'showLoginError'
        title: 'Login Failed',
        message: 'Failed to authenticate',
        type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
      },
      showErrorMessage: { // You can have any name you want instead of 'showLoginError'
        title: 'Error',
        message: 'Error',
        timeout: 3000,
        type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
      },
      showSuccessMessage: { // You can have any name you want instead of 'showLoginError'
        title: 'Success',
        message: 'Success',
        timeout: 3000,
        type: 'success' // You also can use 'VueNotifications.types.error' instead of 'error'
      },
      showInfoMessage: { // You can have any name you want instead of 'showLoginError'
        title: 'Info',
        message: 'Info',
        timeout: 3000,
        type: 'info' // You also can use 'VueNotifications.types.error' instead of 'error'
      }
    }
  }
</script>
