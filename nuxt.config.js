export default {
    ssr: true,
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    router: {
        base: process.env.NODE_ENV === 'production' ? '/suckatcoding/' : '/'
    },
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt/content
        '@nuxt/content',
        '@nuxtjs/feed',
        '@nuxtjs/markdownit',
        '@nuxtjs/sitemap'
    ],
    /*
     ** Content module configuration
     ** See https://content.nuxtjs.org/configuration
     */
    content: {
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-material-oceanic.css'
            }
        },
        nestedProperties: ['author.name']
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
    sitemap: {
        hostname: process.env.NODE_ENV === 'production' ? 'https://milchreis.githib.io/suckatcoding' : 'http://localhost:3000',
    },
    feed: [{
        path: '/feed.xml',
        async create(feed) {
            feed.options = {
                title: process.env.npm_package_name || '',
                description: 'Some description',
                link: 'https://milchreis.githib.io/suckatcoding/feed.xml',
            };

            // eslint-disable-next-line global-require
            const { $content } = require('@nuxt/content');

            const posts = await $content('articles').fetch();

            posts.forEach((post) => {
                const url = `https://milchreis.githib.io/suckatcoding/blog/${post.slug}`;
                feed.addItem({
                    title: post.title,
                    id: url,
                    link: url,
                    date: new Date(post.createdAt),
                    description: post.blurb,
                    content: post.bodyText,
                });
            });
        },
        cacheTime: 1000 * 60 * 15,
        type: 'rss2',
    }, ],
    hooks: {
        'content:file:beforeInsert': (document) => {
            // eslint-disable-next-line
            const md = require('markdown-it')();
            if (document.extension === '.md') {
                // eslint-disable-next-line global-require
                const { text } = require('reading-time')(document.text);
                document.readingTime = text;
                const mdToHtml = md.render(document.text);
                document.bodyText = mdToHtml;
            }
        },
    },
    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true,
        use: ['markdown-it-div', 'markdown-it-attrs'],
    },
}