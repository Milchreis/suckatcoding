<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search"
      class="block w-full pl-3 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white"
    />
    <ul
      v-if="items.length"
      class="z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
    >
      <li v-for="item of items" :key="item.slug">
        <NuxtLink
          :to="{ name: item.slugType + '-slug', params: { slug: item.slug } }"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-gray-700 hover:text-pink-700"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      items: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.items = []
        return
      }
      const articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()

      articles.forEach((a) => (a.slugType = 'blog'))

      const projects = await this.$content('projects')
        .limit(6)
        .search(searchQuery)
        .fetch()

      projects.forEach((p) => (p.slugType = 'projects'))

      this.items = [...projects, ...articles]
    }
  }
}
</script>
