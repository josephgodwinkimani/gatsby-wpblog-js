/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.URL || `http://localhost:8000`

module.exports = {
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: siteUrl,
  },
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        verbose: true,
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `http://wpstarter.local/graphql`,
        develop: {
          nodeUpdateInterval: 300,
        },
        debug: {
          preview: true,
          graphql: {
            showQueryOnError: true,
            showQueryVarsOnError: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                50
                : // and we don't actually need more than 5000 in production for this particular site
                5000,
          },
        },
        schema: {
          typePrefix: `Wp`,
          perPage: 100,
          requestConcurrency: 100,
          previewRequestConcurrency: 100,
          timeout: 100000,
          circularQueryLimit: 50,
        },
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    `gatsby-plugin-offline`,

    /**
     * This plugin only generates output when run in production mode! 
     * To test your sitemap, run: gatsby build && gatsby serve
     */
    //`gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
      {
        allSitePage {
          nodes {
            path
          }
        }
        allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
          nodes {
            ... on WpPost {
              uri
              modifiedGmt
            }
            ... on WpPage {
              uri
              modifiedGmt
            }
          }
        }
      }
    `,
        // Returns: string - - site URL, this can come from the graphql query or another scope.
        resolveSiteUrl: () => siteUrl,

        /** 
         * If you don’t want to place the URI in path then resolvePagePath is needed
         * This allows custom resolution of the array of pages. 
         * This also where users could merge multiple sources into a single array if needed. Sync or async functions allowed.
         * To learn more, visit: https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
         */
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allWpContentNode: { nodes: allWpNodes },
        }) => {
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      }
    }
  ],
}
