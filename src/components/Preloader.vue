<template>
<transition name="fade">
  <div class="preloader">
    <div class="logo"></div>
    <p>algun texto</p>
  </div>
</transition>
  
</template>

<script>
export default {

}
</script>

<style>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #5c5c5c87;
  z-index:9999;
  
}

</style>