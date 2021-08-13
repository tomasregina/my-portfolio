<template>
  <div>
    <HeroProfileBanner />
    <Bio />
  </div>
</template>
<script>
import HeroProfileBanner from '../components/HeroProfileBanner.vue';
import Bio from '../components/Bio.vue';
export default {
  name: 'AboutMe',
  components: {
    HeroProfileBanner,
    Bio
  }
};
</script>
