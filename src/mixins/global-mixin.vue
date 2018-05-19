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
