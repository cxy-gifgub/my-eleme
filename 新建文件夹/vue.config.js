module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
            }
        }
    },
    // devServer: {
    //     proxy: {
    //         '/bilibiliapi': {
    //             target: 'https://api.bilibili.com/', 
    //             ws: true,  
    //             changeOrigin: true,  
    //             pathRewrite: {
    //                 '^/bilibiliapi': '' 
    //             }
    //         },
    //     }
    // }

}