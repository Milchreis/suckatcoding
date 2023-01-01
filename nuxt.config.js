const domain = 'https://suckatcoding.com'

export default {
    ssr: false,
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: 'suck at coding',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        '~/plugins/offline-resources.js',
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/tailwindcss', ['@nuxtjs/google-analytics', { id: 'UA-79199881-4' }]
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
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
        hostname: process.env.NODE_ENV === 'production' ? domain : 'http://localhost:3000',
    },
    feed: [{
        path: '/feed.xml',
        async create(feed) {
            feed.options = {
                title: process.env.npm_package_name || '',
                description: 'Some description',
                link: `${domain}/feed.xml`,
            };

            // eslint-disable-next-line global-require
            const { $content } = require('@nuxt/content');

            const posts = await $content('articles').fetch();

            posts.forEach((post) => {
                const url = `${domain}/blog/${post.slug}`;
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
    },],
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