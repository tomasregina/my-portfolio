<template>
  <div class="grid grid-cols-2 items-center banner-background py-3">
    <!-- about text -->
    <div>
      <span class="text-3xl"
        >Hi, I'm Tomas and welcome on my portfolio page!</span
      >
    </div>
    <!-- profile picute -->
    <div class="m-auto ">
      <ProfilePicture />
    </div>
  </div>
</template>
<script>
import ProfilePicture from './ProfilePicture.vue';
export default {
  components: {
    ProfilePicture
  }
};
</script>
<style>
.banner-background {
  background-color: #fff0cc;
}
</style>
