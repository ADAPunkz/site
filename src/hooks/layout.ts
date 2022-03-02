import { ResponsiveContext } from "grommet";
import { useContext } from "react";

import { isMobilePlatform, isSSR } from '../utils';

export const useMobileLayout = () => {
  const size = useContext(ResponsiveContext);

  if (isSSR || (Boolean(size) && size === 'small') || isMobilePlatform) {
    return true;
  }

  return false;
};
