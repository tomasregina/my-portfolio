<template>
  <div class="">
    <h4 class="font-bold text-lg" v-if="title">{{ title }}</h4>
    <p class="italic" v-if="techStack">{{ techStack }}</p>
    <p v-if="date">{{ date }}</p>
    <p><a v-if="link" target="#" :href="link">See app</a></p>
    <p>
      <a v-if="githubRepo" target="#" :href="githubRepo"
        >See GitHub repository</a
      >
    </p>
    <p v-if="description">{{ description }}</p>
    <div class="flex  space-x-4 justify-center py-5 gallery-background">
      <img
        @click="openImgInModal(img.src)"
        v-for="img in imgsArr"
        class="w-1/3 object-cover"
        :src="img.src"
        :key="img.id"
        alt=""
      />
    </div>
    <Modal v-on:close-modal="modalOpen=false" class="absolute top-0 " v-if="modalOpen" :imgSrc="modalImgSrc" />
  </div>
</template>
<script>
import Modal from './Modal.vue'
export default {
  props: {
    title: String,
    techStack: String,
    date: String,
    link: String,
    githubRepo: String,
    description: String,
    imgsArr: Array
  },
  data () {
    return {
      modalOpen: false,
      modalImgSrc: undefined
    }
  },
  components: {
    Modal
  },
  methods: {
    openImgInModal(imgSrc) {
      window.scroll(0, 0);
      console.log('imgsSRc', imgSrc);
      this.modalOpen = true;
      this.modalImgSrc = imgSrc;
      document.documentElement.style.overflow = 'hidden'
    }
  }
};
</script>
<style>
.gallery-background {
  background-color: #fff0cc;

}
</style>
