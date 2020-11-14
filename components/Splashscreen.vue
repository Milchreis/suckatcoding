<template>
  <div class="splashscreen">
    <div>
      <div class="container">
        <div class="face">
          <Face />
        </div>
        <div class="logo_text">
          <Logo />
        </div>
      </div>
      <div class="scroll" @click="scrollDown">
        <ScrollDown />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      const scollY = document.querySelector('.splashscreen').clientHeight
      window.scrollTo({ top: scollY, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="postcss">
.face {
  height: 40vh;
  max-height: 40vh;
  transform-style: preserve-3d;
  transition: all 0.3s;
  transform: rotateZ(-5deg) scale(1);
}

.face > img {
  margin-top: 5em;
  height: 90% !important;
  width: auto !important;
  max-width: auto !important;
}

.logo_text > img {
  height: 110% !important;
  width: auto !important;
  max-width: auto !important;
}

.face:hover {
  transform: rotateZ(0deg) scale(1.1);
}

.logo_text {
  height: 40vh;
  max-height: 40vh;
  backface-visibility: hidden;
  transform: rotateZ(5deg) scale(1);
  transition: all 0.3s;
}

.logo_text:hover {
  transform: rotateZ(8deg) scale(1.2);
}

.splashscreen .container {
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: center;
  margin-bottom: 10em;
}

.splashscreen .scroll {
  margin: 0 auto;
  padding: 2em;
  left: 50%;
  max-width: 6em;
  position: absolute;
  bottom: 5em;
  cursor: pointer;
  animation-name: scrollMove;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes scrollMove {
  from {
    bottom: 5em;
  }
  to {
    bottom: 7em;
  }
}

.splashscreen {
  height: 100vh;
  background-image: url(~assets/images/splash.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
