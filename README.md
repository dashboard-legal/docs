
# Dashboard Legal docs

This is a [Gatsby.js](https://www.gatsbyjs.com/) site for [Dashboard Legal's documentation](https://docs.dashboardlegal.com).

It uses the [Apollo docs theme](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-docs)

# Contributing
- To install gastby, `npm install -g gatsby-cli`
- Run `gatsby develop` to get the local server running
*note that the gatsby dev server needs to be restarted if you change the gatsby-config.js file*

# Deployment
- `gatsby build` to build the prod bundle
- `gabsty serve` will serve the production bundle locally
- Upon a push to master, [netlify](https://www.netlify.com) will build the prod bundle and deploy it to [https://docs.dashboardlegal.com](https://docs.dashboardlegal.com)
