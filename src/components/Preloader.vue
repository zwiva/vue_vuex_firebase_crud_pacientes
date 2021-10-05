<template>
  <transition>
    <div class="preloader">
      <div class="logo"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Preloader",
  data: () => ({
    isLoaderActive: true,
  }),
  mounted() {
    setTimeout(() => {
      this.isLoaderActive = false;
    }, 2000);
  },
};
</script>

<style>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(3, 62, 102, 0.2);
  z-index: 1;
}
.logo {
  background-image: url("https://giffiles.alphacoders.com/209/209557.gif");
  /* background-image: url("../assets/shin.gif"); */
  width: 10rem;
  height: 10rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 1rem;
}
</style>