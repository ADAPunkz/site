import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import { SiteAndIconQuery } from '../../graphql-types';

const SEO = () => {
  const { site, file } = useStaticQuery<SiteAndIconQuery>(
    graphql`
      query SiteAndIcon {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
        file(name: { eq: "icon" }) {
          childImageSharp {
            resize(width: 500) {
              src
              height
              width
            }
          }
        }
      }
    `,
  );

  const metaDescription = site.siteMetadata.description;
  const metaImage = file;
  const image = `${site.siteMetadata.siteUrl}${file.childImageSharp.resize.src}`;
  const canonical = site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={site.siteMetadata.title}
      titleTemplate={site.siteMetadata.title}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        metaImage
          ? [
              {
                property: 'og:image',
                content: image,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            ]
          : [
              {
                name: 'twitter:card',
                content: 'summary',
              },
            ],
      )}
    />
  );
};

export default SEO;
