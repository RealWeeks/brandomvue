<template>
  <div>

    <body>

      <section>

          <div class="center">
            <p>{{user.email}}</p>
              <div class="trigger" ref="clickTrigger">
              <p class="text-place">Do a Shaka!</p>
              <div class="hand">

                  <div class="finger">
                      <div class="nail"></div>
                  </div>
                  <div class="finger">
                      <div class="nail"></div>
                  </div>
                  <div class="finger">
                      <div class="nail"></div>
                  </div>
                  <div class="finger">
                      <div class="nail"></div>
                  </div>
                  <div class="thumb">
                      <div class="nail"></div>
                  </div>
                  <div class="body-hand"></div>

              </div>
              </div>

          </div>

      </section>

  </body>
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
@import url("https://fonts.googleapis.com/css?family=Lato");
.text-place{
  margin-top: 100px;
}
body {
  margin: 0;
}
section {
  width: 100%;
  height: 100vh;
  display: table;
  background: #c8d3d5;
}
.center {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.trigger {
  left: calc(50% -  165px);
  top: calc(50% -  360px);
  height: 720px;
  width: 310px;
  position: absolute;
  display: block;
  transform: scale(0.35);
  cursor: pointer;
}
p {
  padding-top: 480px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 120px;
  line-height: 120px;
  color: #a4b8c4;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.hand {
  left: 0;
  top: 250px;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: transform 0.3s;
  display: block;
  box-shadow: 0 0 0 10px rbga(0, 0, 0, 1);
}
.finger {
  display: block;
  border-radius: 25px;
  height: 320px;
  width: 50px;
  background: #a4b8c4;
  position: absolute;
  margin: 0 auto;
  z-index: 11;
  transition: transform 0.3s, all 0.3s;
}
.finger .nail {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 30px;
  width: 30px;
  display: block;
  background: #fcfafa;
  position: absolute;
  top: 10px;
  left: calc(50% -  15px);
}
.finger:nth-child(1) {
  top: -150px;
  left: 0;
}
.finger:nth-child(2) {
  top: -200px;
  left: 60px;
}
.finger:nth-child(3) {
  top: -250px;
  left: 120px;
}
.finger:nth-child(4) {
  top: -200px;
  left: 180px;
}
.thumb {
  display: block;
  border-top-left-radius: 25px;
  height: 260px;
  width: 70px;
  background: #a4b8c4;
  position: absolute;
  margin: 0 auto;
  z-index: 10;
  top: -100px;
  right: 0;
  transition: transform 0.3s, all 0.3s;
}
.thumb .nail {
  border-top-left-radius: 15px;
  height: 30px;
  width: 30px;
  display: block;
  background: #fcfafa;
  position: absolute;
  top: 10px;
  right: 10px;
}
.body-hand {
  display: block;
  position: absolute;
  width: 310px;
  height: 310px;
  border-radius: 100%;
  background: #a4b8c4;
  transition: all 0.3s;
}
.trigger:hover .hand {
  transform: scale(-1, 1);
}
.trigger:hover .finger {
  height: 200px;
}
.trigger:hover .finger:nth-child(1) {
  transform: rotate(-45deg) scale(1.25) translate(-127px, 15px);
  height: 250px;
  z-index: 9;
}
.trigger:hover .finger:nth-child(1) .nail {
  display: none;
}
.trigger:hover .finger:nth-child(2),
.trigger:hover .finger:nth-child(3),
.trigger:hover .finger:nth-child(4) {
  box-shadow: 0 -5px 0 10px rgba(0, 0, 0, 0.05);
}
.trigger:hover .finger:nth-child(2) {
  transform: rotate(-45deg) scale(1.25, -1.25) translate(-140px, -110px);
}
.trigger:hover .finger:nth-child(3) {
  transform: rotate(-45deg) scale(1.25, -1.25) translate(-140px, -100px);
}
.trigger:hover .finger:nth-child(4) {
  transform: rotate(-45deg) scale(1.25, -1.25) translate(-83px, -45px);
}
.trigger:hover .thumb {
  transform: rotate(45deg) scale(1.25);
  top: -33px;
  right: -95px;
}
.trigger:hover .body-hand {
  border-radius: 100px;
  transform: rotate(45deg);
}

</style>
