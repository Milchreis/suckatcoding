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
        <div
          class="text-center text-lg text-white font-bold font-head pl-2 pr-2"
        >
          <div class="customCursor">
            {{ viewedSubline }}
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
  mixins: [scroll],
  data() {
    return {
      subline: 'Lessons from the weird life of a software developer',
      viewedSubline: '',
      curCursor: 0,
      intervalId: null
    }
  },
  created() {
    setTimeout(this.simulateTip, 500)
  },
  methods: {
    simulateTip() {
      this.curCursor++
      if (this.curCursor <= this.subline.length) {
        this.viewedSubline = this.subline.substring(0, this.curCursor)
        setTimeout(this.simulateTip, Math.random() * (150 - 10) + 10)
      }
    }
  }
}
</script>

<style lang="scss">
.face {
  height: 40vh;
  max-height: 40vh;
  transform-style: preserve-3d;
  transition: all 0.3s;
  transform: rotateZ(-5deg) scale(1);
}

.face > img {
  margin-top: 5em;
  height: 27vw;
  max-height: 349px !important;
  width: auto !important;
  max-width: 500px !important;
}

.logo_text > img {
  height: 35vw;
  max-height: 108% !important;
  width: auto !important;
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
  margin-bottom: 15%;
  padding: 1rem;
}

.splashscreen .scroll {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  bottom: 4em;
}

.splashscreen .scroll .scrollicon {
  max-width: 6em;
  padding: 2em;
  position: absolute;
  bottom: 4em;
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
    bottom: 4em;
  }

  to {
    bottom: 6em;
  }
}

.splashscreen {
  height: 100vh;
  font-family: 'Volkhov', serif;
  background-image: url(~assets/images/splash2.jpg);
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

.splashscreen .headertext {
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
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

.customCursor {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}

.customCursor::after {
  content: '';
  width: 3px;
  height: 20px;
  background: #fff;
  display: inline-block;
  animation: cursor-blink 1s steps(2) infinite;
}
</style>
