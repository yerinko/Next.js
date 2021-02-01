// next.config.js
module.exports = {
    exportPathMap: () => ({
        '/': { page: '/' },
        '/about': { page: '/about' },
        // '/post/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
        // '/post/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
        // '/post/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    })
};

// const widthBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
// const nextEnv = require('next-env');
// const dotenvLoad = require('dotenv-load');
// const webpack = require('webpack');
//
// dotenvLoad();
//
// const withNextEnv = nextEnv();
//
// module.exports = {
//     webpack(config ,{ isServer, buildId} ) {
//         config.resolve.modules.push(__dirname)
//
//         return config;
//     }
// }
