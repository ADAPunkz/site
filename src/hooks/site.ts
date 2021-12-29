import { graphql, useStaticQuery } from 'gatsby';

import { SiteMetadataQuery } from '../../graphql-types';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          author
          description
          policyId
          twitter
          discord
          github
          keywords
        }
      }
    }
  `);

  return site.siteMetadata;
};
