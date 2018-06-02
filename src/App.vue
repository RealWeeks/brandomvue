<template>
    <div id="app">
      <router-view
      class="main-container"
      />
    </div>
</template>
<script>

export default {
  name: 'App',
}
</script>

<style>
body,
html,
.main-container{
  min-height:100%
}
</style>
