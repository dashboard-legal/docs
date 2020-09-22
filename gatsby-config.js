/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

// gatsby-config.js
module.exports = {
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
      	//...themeOptions,
        root: __dirname,
        siteName: 'Dashboard Legal Docs',
        subtitle: 'Dash Legal',
        description: 'A guide to using Dashboard Legal',
        githubRepo: 'dashboard-legal/docs',
        // contentDir: 'content',
        defaultVersion: '1',
        versions: {
          '1': 'version-1'
        },
        sidebarCategories: {
          null: [
            'example',
            'somethingelse',
            // 'getting-started',
            // 'whats-new'
          ],
          Features: [
            'intro/hi',
            // 'features/errors',
            // 'features/data-sources'
          ]
        }
      }
    }
  ]
};