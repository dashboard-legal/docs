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
    siteName: `Dashboard Legal Docs`,
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
            'intro/getting-started',
            // 'intro/helpful-screenshots'
          ],
          // 'Account': [
          //   'account/setting-up-your-organization',
          //   'account/join-an-organization'
          // ],
          'Email': [
            'email/intro',
            'email/link-your-email',
            'email/email-security',
            'email/get-admin-approval',
            'email/configuring-integrations'
          ],
          // 'Boards': [
          //   'boards/client-boards',
          //   'boards/workstream-boards'
          // ],
          'Documents': [
            'documents/intro',
            'documents/how-to',
            'documents/imanage',
            'documents/netdocs',
          ],
          // 'Chat': [

          // ],
          // 'Checklists': [

          // ],
          'Administration': [
            // 'administration/data-residency-and-privacy',
            'administration/managing-users',
            'administration/security-settings',
            // 'administration/on-premise-deployments',
          ],
          'Security': [
            'security/data-residency',
            'security/refresh-token-security',
          ],
        },
        navConfig: {
    			'Dashboard Legal Web': {
    				url: '/',
    				description: 'Set up your firm with Dashboard Legal in minutes'
    				//omitLandingPage: true
    			},
          // 'Dashboard Legal On-Premise': {
          //   url: '/on-prem/',
          //   description: "Deploy Dashboard Legal on your own infrastructure using the Reynen Court Platform"
          // },
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