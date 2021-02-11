<template>
  <div class="w-1/2 px-2 xs:mb-6 md:mb-12 mx-auto">
    <div class="flex transition-shadow xxlmax:flex-col">
      <img
        v-if="author.img"
        class="h-32 xxlmin:w-1/2 xxlmax:w-full object-cover rounded-full"
        :src="author.img"
      />
      <div class="flex flex-col ml-4">
        <h4 class="font-semibold text-gray-900">{{ author.name }}</h4>
        <p class="text-gray-700 italic text-md">{{ author.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
