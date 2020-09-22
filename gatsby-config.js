/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// gatsby-config.js
module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Dashboard Legal Docs`,
  },
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Dashboard Legal Docs',
        pageTitle: 'Dashboard Legal Docs',
		menuTitle: 'Dashboard Legal Docs',
        subtitle: 'Dashboard Legal Web',
        description: 'A guide to using Dashboard Legal',
        // githubRepo: 'dashboard-legal/docs',
        // gaTrackingId: 'UA-74643563-13',
		// algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
		// algoliaIndexName: 'apollodata',
		//baseUrl: 'https://docs.dashboardlegal.com',
		// twitterHandle: 'apollographql',
		// spectrumHandle: 'apollo',
		// youtubeUrl: 'https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw',
		//logoLink: 'https://docs.dashboardlegal.com',
		// baseDir: 'docs',
		contentDir: 'content',

        spectrumHandle: null,
        // defaultVersion: '1',
        // versions: {
        //   '1': 'version-1'
        // },
        sidebarCategories: {
          null: [
            'index',
            'intro/getting-started'
          ],
          // 'Account': [
          //   'account/setting-up-your-organization',
          //   'account/join-an-organization'
          // ],
          'Email': [
            'email/intro',
            'email/link-your-email',
            'email/get-admin-approval'
          ],
          // 'Boards': [
          //   'boards/client-boards',
          //   'boards/workstream-boards'
          // ],
          // 'Documents': [

          // ],
          // 'Chat': [

          // ],
          // 'Checklists': [

          // ]
        },
        navConfig: {
			'Dashboard Legal Web': {
				url: 'https://docs.dashboardlegal.com',
				description: 'Set up your firm with Dashboard Legal in minutes'
				//omitLandingPage: true
			}
		},
        footerNavConfig: {
			Home: {
				href: 'https://dashboardlegal.com/',
				target: '_blank'
			},
			Blog: {
				href: 'https://dashboardlegal.com/insights/',
				target: '_blank'
			},
			'Log In': {
				href: 'https://app.dashboardlegal.com/',
				target: '_blank'
			}
        }
      }
    }
  ]
};