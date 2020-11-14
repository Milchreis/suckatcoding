<template>
  <nav class="navbar" :class="bare === true ? 'bare' : ''">
    <div class="container">
      <div class="title">
        <NuxtLink to="/">
          <Face />
          <Logo />
        </NuxtLink>
      </div>
      <a href="#" class="toggle-button" @click.prevent="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links" :class="open ? 'active' : ''">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    bare: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false
    }
  },
  mounted() {
    if (!this.bare) return

    window.onscroll = function () {
      const max = window.innerHeight * 0.75
      if (
        document.body.scrollTop > max ||
        document.documentElement.scrollTop > max
      ) {
        document.querySelector('.navbar').classList.remove('bare')
      } else {
        document.querySelector('.navbar').classList.add('bare')
      }
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    }
  }
}
</script>

<style type="postcss" scoped>
.navbar {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #1b1f1e;
  opacity: 0.9;
  transition: all 0.3s;
}

.navbar.bare {
  box-shadow: 0 30px 18px 6px rgba(0, 12, 0, 0.64) inset;
  background-color: initial;
}

.navbar .title {
  transition: all 0.3s;
  opacity: 1;
}
.navbar.bare .title {
  opacity: 0;
}

.navbar .container {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.title img {
  max-height: 60px;
  display: inline-block;
}

.navbar-links {
  height: 100%;
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  list-style: none;
}

.navbar-links li a {
  display: block;
  text-decoration: none;
  color: #f0f0f0;
  padding: 1rem;
}

.navbar-links li a:hover {
  color: #ef4c59;
}

.bare .navbar-links li:hover {
  background-color: initial;
}

.toggle-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .toggle-button {
    display: flex;
  }

  .navbar-links {
    display: none;
    width: 100%;
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
  }

  .navbar-links ul li {
    text-align: center;
  }

  .navbar-links ul li a {
    padding: 0.5rem 1rem;
  }

  .navbar-links.active {
    display: flex;
  }
}
</style>
