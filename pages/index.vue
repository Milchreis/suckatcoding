<template>
  <div>
    <MainNavigation :bare="true" />
    <Splashscreen />

    <div class="min-h-screen container">
      <!-- <section class="lg:px-[15%] px-[5%] lg:pb-20 pb-14">
        <h1 class="lg:text-5xl text-2xl leading-normal font-bold font-head">
          <span class="font-bold">
            Latest <span class="text-gradient">works</span>
          </span>
        </h1>
      </section> -->

      <section class="lg:px-[15%] px-[5%] lg:pb-20 pb-14">
        <h1 class="lg:text-5xl text-2xl leading-normal font-bold font-head">
          <span class="font-bold">
            Recent <span class="text-gradient">Blog</span> Posts
          </span>
        </h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div
            v-for="article of articles"
            :key="article.slug"
            class="article_box rounded-lg border-2"
          >
            <NuxtLink
              class="s_btn"
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              <div class="article_image">
                <img :src="article.img" />
              </div>
              <div class="p-4">
                <h2 class="text-lg font-semibold">
                  {{ article.title }}
                </h2>

                <div class="text-sm mt-1 text-gray-600">
                  {{ article.description }}
                </div>

                <div class="mt-4">Read more</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
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
      .limit(6)
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
.article_box {
  overflow: hidden;
  transition: all 0.15s ease-in-out;
  border-radius: 5px;
}

.article_box:hover {
  background-color: #191a19;
  color: #fff;
}

.article-card a {
  background-color: #fff;
  border-radius: 8px;
}

.article_image {
  position: relative;
  display: block;
  background: #ededf3;
  padding-bottom: 66.25%;
  overflow: hidden;
}

.article_image img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #ededf3;
}
</style>
