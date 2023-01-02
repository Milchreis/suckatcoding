<template>
  <div>
    <cookie-consent>
      <template slot="button">
        <button class="btn">Got it!</button>
      </template>
    </cookie-consent>
    <Nuxt />
  </div>
</template>

<script>
import CookieConsent from 'vue-cookieconsent-component'

export default {
  components: {
    CookieConsent
  }
}
</script>

<style lang="scss">
@import './node_modules/vue-cookieconsent-component/src/scss/cookie-consent';
@import './node_modules/vue-cookieconsent-component/src/scss/cookie-consent-bottom';
@import './node_modules/vue-cookieconsent-component/src/scss/cookie-consent-transition';

.cookie-consent {
  background: #2f2f2f;
  color: #f8f8f8;

  a {
    color: #d31864;
    text-decoration: inherit;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: #f8933a;
    }
  }

  .btn {
    padding: 10px;
    border-radius: 3px;
    background: linear-gradient(135deg, #fe9332 38%, #db1d6a 100%);
  }
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.text-gradient {
  background: linear-gradient(135deg, #fe9332 38%, #db1d6a 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
