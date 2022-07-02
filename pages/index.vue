<template>
  <div>
    <MainNavigation :bare="true" />
    <Splashscreen />

    <div id="blog" class="container xs:py-8 xs:px-8 lg:py-8">
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex xxlmax:flex-col article-card pt-2 pb-2"
          >
            <div class="relative justify-between w-full">
              <img
                v-if="article.img"
                class="inset-0 w-full h-48 object-cover round-10"
                :src="article.img"
              />

              <h1 class="font-extrabold text-4xl">{{ article.title }}</h1>
              <p class="font-bold">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="sectionDarker">
      <div class="container">
        <h3 class="mb-4 font-bold text-3xl font-extrabold text-center">
          Topics
        </h3>
        <ul class="flex flex-wrap mb-4 text-center">
          <li
            v-for="tag of tags"
            :key="tag.slug"
            class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
          >
            <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
              <p class="font-bold tracking-wider font-medium text-ss">
                {{ tag.name }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags
    }
  }
}
</script>

<style class="postcss">
.article-card {
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
}
.article-card:hover {
  background-color: #191a19;
  color: #fff;
}

.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img {
  border-radius: 5px;
}
</style>
