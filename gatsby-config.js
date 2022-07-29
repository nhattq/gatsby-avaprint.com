require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `dreamshipclone`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL,
        schema: {
          timeout: 3600000,
          requestConcurrency: 50,
        },
        // verbose: true,
        // develop: {
        //   nodeUpdateInterval: 3000,
        //   hardCacheMediaFiles: true,
        // },
        // production: {
        //   hardCacheMediaFiles: false,
        // },
        // debug: {
        //   graphql: {
        //     showQueryOnError: false,
        //     showQueryVarsOnError: true,
        //     copyQueryOnError: true,
        //     panicOnError: true,
        //     // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
        //     onlyReportCriticalErrors: true,
        //   },
        // },
        // excludeFieldNames: [`blocksJSON`, `saveContent`],
        // type: {
        //   Post: {
        //     limit:
        //       process.env.NODE_ENV === `development`
        //         ? // Lets just pull 50 posts in development to make it easy on ourselves.
        //           50
        //         : // and we don't actually need more than 5000 in production for this particular site
        //           5000,
        //   },
        // },
      },
    },
    
 // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'WPGraphQL',
    //     fieldName: 'wpgraphql',
    //     url: process.env.WPGRAPHQL_URL,
    //   }
    // },
    //TEST KEY: 
    // ck_18d12155e12672647900df915a0fc20a18122e6c
    // cs_8ef560bf88388686c82994005c4733df3b28151a
    // LIVE_KEY
    // ck_ced47b3c215fe2d2e25878973f034f5814f9d249
    // cs_40e8ad2da85ba8a9f99cfcd1e525d8cdc17ce73c
    // {
    //   resolve: "@pasdo501/gatsby-source-woocommerce",
    //   options: {
    //     // Base URL of WordPress site
    //     api: 'http://localhost/dreamship',
    //     // true if using https. false otherwise.
    //     https: false,
    //     api_keys: {
    //       consumer_key: `ck_18d12155e12672647900df915a0fc20a18122e6c`,
    //       consumer_secret: `cs_8ef560bf88388686c82994005c4733df3b28151a`,
    //     },
    //     // Array of strings with fields you'd like to create nodes for...
    //     fields: ['products', 'products/categories', 'products/attributes'],
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-apollo',
    //   options: {
    //     uri: 'http://localhost/dreamship/graphql'
    //   }
    // },
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-192885400-1"
    }
  }, 
  "gatsby-plugin-react-helmet", 
  "gatsby-plugin-sharp",
  "gatsby-plugin-image",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }
]
};