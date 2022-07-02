<template>
  <div>
    <div class="splashscreen">
      <div class="splashend">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"
          ></path>
        </svg>
      </div>
      <div>
        <div class="container">
          <div class="face">
            <Face />
          </div>
          <div class="logo_text">
            <Logo />
          </div>
        </div>
        <div class="scroll" @click="scrollDown('.splashscreen')">
          <ScrollDown />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from '@/mixins/scroll'

export default {
  mixins: [scroll]
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
  max-height: 500px !important;
  width: auto !important;
  max-width: 500px !important;
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
  display: flex;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  bottom: 5em;
}

.splashscreen .scroll .scrollicon {
  max-width: 6em;
  padding: 2em;
  position: absolute;
  bottom: 5em;
  max-height: 100px;
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
  margin-bottom: 6em;
}

.splashend {
  bottom: -1px;
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
}

.splashend svg {
  fill: #fff;
}
</style>
