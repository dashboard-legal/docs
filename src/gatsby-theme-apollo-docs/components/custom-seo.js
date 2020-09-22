import PropTypes from 'prop-types';
import React from 'react';
import {SEO} from 'gatsby-theme-apollo-core';
import {withPrefix} from 'gatsby';

export default function CustomSEO({image, baseUrl, twitterHandle, ...props}) {
  const imagePath = withPrefix('/' + image);
  console.log("got it")
  return (
    <SEO {...props} twitterCard="summary_large_image" favicon="https://dashboardlegal.com/wp-content/uploads/2020/07/LogoIcon-150x150.png">
      <meta property="og:image" content={imagePath} />
    </SEO>
  );
}

CustomSEO.propTypes = {
  baseUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string
};