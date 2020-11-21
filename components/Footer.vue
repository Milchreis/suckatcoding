<template>
  <footer>
    <div class="container">
      <Face />
      <Logo />
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: #222;

  .container {
    display: flex;
    justify-content: center;

    img {
      max-height: 150px;
      padding: 2em 0 2em 0;
    }
  }
}
</style>
