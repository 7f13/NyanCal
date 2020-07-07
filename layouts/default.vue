<template>
  <a-layout>
    <a-layout-header>
      <h1 class="logo">LOGO</h1>
    </a-layout-header>
    <a-layout-content>
      <Nuxt />
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<style lang="sass">
html
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*,
*::before,
*::after
  box-sizing: border-box
  margin: 0

.ant-layout-header
  background-color: rgb(230, 230, 230)
</style>
<style lang="sass" scoped>
.logo
  font-weight:500
</style>
