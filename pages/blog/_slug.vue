<template>
  <div>
    <MainNavigation :bare="false" />

    <article class="flex xs:flex-col lg:flex-col">
      <div class="relative lg:w-full xs:w-full xs:h-84 lg:h-3/4 cover">
        <div
          class="absolute h-full w-full object-cover bg-fixed imagestyle"
          :style="'background-image: url(' + article.img + ');'"
        ></div>
        <div
          class="overlay relative container xs:py-8 xs:px-8 lg:py-32 text-white"
        >
          <div class="mt-16 -mb-3 flex uppercase text-sm">
            <p class="mr-3">
              {{ formatDate(article.updatedAt) }}
            </p>
            <span class="mr-3">•</span>
            <p>{{ article.author.name }}</p>
          </div>
          <h1 class="text-6xl font-extrabold">{{ article.title }}</h1>
          <p class="-mt-2 mb-5 font-bold">{{ article.description }}</p>
          <span v-for="(tag, id) in article.tags" :key="id">
            <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
              <span
                class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
              >
                {{ tags[tag].name }}
              </span>
            </NuxtLink>
          </span>
        </div>
      </div>
      <div
        class="container relative xs:py-8 xs:px-8 lg:py-8 xs:w-full markdown-body post-right custom-scroll"
      >
        <!-- table of contents -->
        <TableOfContent v-if="false" :article="article"></TableOfContent>

        <!-- content from markdown -->
        <nuxt-content :document="article" />
      </div>

      <div class="container relative xs:py-8 xs:px-8 lg:py-8 xs:w-full">
        <!-- content author component -->
        <author :author="article.author" />
      </div>

      <div class="sectionDarker">
        <div class="container relative xs:py-8 xs:px-8 lg:py-8 xs:w-full">
          <h1 class="text-3xl font-extrabold">Other articles</h1>
          <!-- prevNext component -->
          <PrevNext :prev="prev" :next="next" class="mt-8" />
        </div>
      </div>
    </article>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: `${this.article.title} - suck at coding`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.title
        },
        { hid: 'og-title', property: 'og:title', content: this.article.title }
      ]
    }
  }
}
</script>

<style lang="scss">
.sectionDarker {
  color: #ebebeb;
  background-color: #444;
  padding: 2em;
  a {
    color: #ccc;
  }
}

article {
  font-size: 1.1rem;
  h2 {
    font-size: 2.5rem !important;
    font-weight: 800 !important;
    margin-bottom: 1rem;
    line-height: 0.95;
  }
  h3 {
    font-size: 2rem !important;
    font-weight: 800 !important;
    margin-bottom: 0.6rem;
    line-height: 0.95;
  }
  h4 {
    font-size: 1.7rem !important;
    font-weight: 800 !important;
    margin-bottom: 0.4rem;
    line-height: 0.95;
  }
  pre code {
    font-size: 0.85em;
    line-height: 1.2em;
    letter-spacing: 0;
  }

  p img {
    margin: 1em auto;
  }

  blockquote {
    display: flex;
    justify-content: center;
    p {
      border-left: solid 3px gray;
      font-style: italic;
      margin: 1em auto;
      padding: 0.5em 0.5em 0.5em 0.5em;
      opacity: 0.7;
    }
  }
}

.markdown-body .nuxt-content a {
  color: #d31864;
  text-decoration: inherit;
  font-weight: 600;
  transition: color 0.3s;
}

.markdown-body .nuxt-content a:hover {
  color: #f8933a;
}

.cover {
  overflow: hidden;
  background-color: #1e2121;
}

.lg\:h-3\/4 {
  height: 75vh;
}

.imagestyle {
  width: 100%;
  height: 100%;
  filter: brightness(75%) blur(5px);
  background-size: cover;
  background-repeat: no-repeat;
}

.overlay {
  margin-top: 1em;
}

.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
