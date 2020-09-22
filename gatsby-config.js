/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

// gatsby-config.js
module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Your Site Name`,
  },
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Dashboard Legal Docs 1',
        pageTitle: 'Dashboard Legal Docs 2',
		menuTitle: 'Dashboard Legal Docs 3',
        subtitle: 'Dashboard Legal Docs 4',
        description: 'A guide to using Dashboard Legal',
        // githubRepo: 'dashboard-legal/docs',
        // gaTrackingId: 'UA-74643563-13',
		// algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
		// algoliaIndexName: 'apollodata',
		baseUrl: 'https://www.apollographql.com',
		// twitterHandle: 'apollographql',
		// spectrumHandle: 'apollo',
		// youtubeUrl: 'https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw',
		logoLink: 'https://www.apollographql.com/docs/',
		// baseDir: 'docs',
		contentDir: 'content',

        spectrumHandle: null,
        // defaultVersion: '1',
        // versions: {
        //   '1': 'version-1'
        // },
        sidebarCategories: {
          null: [
            'example',
            'somethingelse'
            // 'getting-started',
            // 'whats-new'
          ],
          Features: [
            'intro/hi'
            // 'features/errors',
            // 'features/data-sources'
          ]
        },
        navConfig: {
			'Apollo Basics': {
				url: 'https://www.apollographql.com/docs',
				description:
				'Learn about each part of the Apollo platform and how they all work together.',
				omitLandingPage: true
			},
			'Apollo Server': {
				url: 'https://www.apollographql.com/docs/apollo-server',
				description:
				'Configure a production-ready GraphQL server to fetch and combine data from multiple sources.'
			},
			'Apollo Client (React)': {
				url: 'https://www.apollographql.com/docs/react',
				description:
				"Manage the entirety of your React app's state and seamlessly execute GraphQL operations."
			},
			'Apollo Studio': {
				url: 'https://www.apollographql.com/docs/graph-manager',
				description:
				"Build your graph with your team, evolve it safely, and keep it running smoothly."
			},
			'Apollo Client (iOS)': {
				url: 'https://www.apollographql.com/docs/ios',
				description:
				"Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations."
			},
			'Apollo Client (Android)': {
				url: 'https://www.apollographql.com/docs/android',
				description:
				"Manage the entirety of your Android app's state and seamlessly execute GraphQL operations.",
				omitLandingPage: true
			}
		},
        footerNavConfig: {
			Blog: {
				href: 'https://blog.apollographql.com/',
				target: '_blank',
				rel: 'noopener noreferrer'
			},
			Contribute: {
				href: 'https://www.apollographql.com/docs/community/'
			},
			'GraphQL Summit': {
				href: 'https://summit.graphql.com/',
				target: '_blank',
				rel: 'noopener noreferrer'
			}
        }
      }
    }
  ]
};