import { graphql, useStaticQuery } from 'gatsby';
import { Box, Button } from 'grommet';
import { Twitter } from 'grommet-icons';

import { SiteSocialsQuery } from '../../graphql-types';
import { Discord } from './icons';

const SocialsBar = ({ size = 'medium' }: { size?: string }) => {
  const { site } = useStaticQuery<SiteSocialsQuery>(graphql`
    query SiteSocials {
      site {
        siteMetadata {
          twitter
          discord
        }
      }
    }
  `);

  return (
    <Box direction="row" gap="small" align="center">
      <Button href={site.siteMetadata.twitter} icon={<Twitter size={size} />} target="_blank" rel="noreferrer" hoverIndicator />
      <Button href={site.siteMetadata.discord} icon={<Discord size={size} />} target="_blank" rel="noreferrer" hoverIndicator />
    </Box>
  );
};

export default SocialsBar;
