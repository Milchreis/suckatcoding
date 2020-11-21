<template>
  <nav class="pb-6">
    <ul>
      <li
        v-for="link of article.toc"
        :key="link.id"
        :class="{
          'font-semibold': link.depth === 2
        }"
      >
        <nuxtLink
          :to="`#${link.id}`"
          class="hover:underline"
          :class="{
            'py-2': link.depth === 2,
            'ml-2 pb-2': link.depth === 3
          }"
          >{{ link.text }}</nuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: null
    }
  }
}
</script>
