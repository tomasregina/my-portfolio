<template>
  <div
    tabindex="0"
    @keydown.esc="closeModal"
    class="w-screen h-screen m-auto pt-10 bg-gray-500 bg-opacity-75 "
  >
    <button
      @click="closeModal"
      class="border px-1  rounded-md bg-white right-40 top-3 absolute cursor-pointer"
    >
      CLOSE
    </button>
    <img :src="imgSrc" class="w-3/4 m-auto" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: String
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
      document.documentElement.style.overflow = 'auto';
    }
  }
};
</script>
