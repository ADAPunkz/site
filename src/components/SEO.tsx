import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { IconQuery } from '../../graphql-types';
import { useSiteMetadata } from '../hooks/site';

const SEO = () => {
  const siteMetadata = useSiteMetadata();
  const { file } = useStaticQuery<IconQuery>(
    graphql`
      query Icon {
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

  const metaDescription = siteMetadata.description;
  const metaImage = file;
  const image = `${siteMetadata.siteUrl}${file.childImageSharp.resize.src}`;
  const canonical = siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={siteMetadata.title}
      titleTemplate={siteMetadata.title}
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
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: siteMetadata.keywords.join(','),
        },
        {
          property: 'og:title',
          content: siteMetadata.title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: siteMetadata.title,
        },
        {
          name: 'twitter:description',
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
