import { Box, Button } from 'grommet';
import { Twitter } from 'grommet-icons';

import { useSiteMetadata } from '../hooks/site';
import { Discord } from './icons';

const SocialsBar = ({ size = 'medium' }: { size?: string }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <Box direction="row" gap="small" align="center">
      <Button href={siteMetadata.twitter} icon={<Twitter size={size} />} target="_blank" rel="noreferrer" hoverIndicator />
      <Button href={siteMetadata.discord} icon={<Discord size={size} />} target="_blank" rel="noreferrer" hoverIndicator />
      {/* <Button href={siteMetadata.github} icon={<Github size={size} />} target="_blank" rel="noreferrer" hoverIndicator /> */}
    </Box>
  );
};

export default SocialsBar;
