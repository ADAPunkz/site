import { graphql, useStaticQuery } from 'gatsby';
import { Box, Button, ResponsiveContext } from 'grommet';
import { Github, Twitter } from 'grommet-icons';
import { useContext } from 'react';

import { SiteSocialsQuery } from '../../graphql-types';
import { Discord } from './icons';

const SocialsBar = ({ size = 'medium' }: { size?: string }) => {
  const responsiveSize = useContext(ResponsiveContext);
  const { site } = useStaticQuery<SiteSocialsQuery>(graphql`
    query SiteSocials {
      site {
        siteMetadata {
          twitter
          discord
          github
        }
      }
    }
  `);

  return (
    <Box direction="row" gap="small" align="center">
      <Button href={site.siteMetadata.twitter} icon={<Twitter size={size} />} target="_blank" rel="noreferrer" hoverIndicator />
      <Button href={site.siteMetadata.discord} icon={<Discord size={size} />} target="_blank" rel="noreferrer" hoverIndicator />
      {responsiveSize !== 'small' && <Button href={site.siteMetadata.github} icon={<Github size={size} />} target="_blank" rel="noreferrer" hoverIndicator />}
    </Box>
  );
};

export default SocialsBar;
