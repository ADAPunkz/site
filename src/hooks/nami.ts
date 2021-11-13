import { useCallback, useEffect, useRef, useState } from 'react';
import shallow from 'zustand/shallow';

import { cardano } from '../utils';
import { useStore } from './store';

export const useNami = (policyId?: string) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const mountedRef = useRef(true);

  const [address, setAddress] = useStore((state) => [state.address, state.setAddress], shallow);
  const [assets, setAssets] = useStore((state) => [state.assets, state.setAssets], shallow);

  const checkAndSetEnabled = async () => {
    if (!cardano.hasNami) {
      return;
    }

    const enabled = await cardano.isEnabled();
    setIsEnabled(enabled);
  };

  const getAndSetAddress = useCallback(async () => {
    if (!mountedRef.current) {
      return;
    }

    setAddress(await cardano.getAddress());
  }, [setAddress]);

  const getAndSetAssets = useCallback(async () => {
    if (!mountedRef.current) {
      return;
    }

    setAssets(await cardano.getAssetNames(policyId));
  }, [policyId, setAssets]);

  const enable = () => {
    setLoading(true);
    cardano
      .enable()
      .then((result) => {
        if (!mountedRef.current) {
          return;
        }

        setLoading(false);
        setIsEnabled(result);

        if (result) {
          getAndSetAddress();
          getAndSetAssets();
        }
      })
      .catch(() => {
        if (!mountedRef.current) {
          return;
        }

        setLoading(false);
        setIsEnabled(false);
      });
  };

  useEffect(() => {
    checkAndSetEnabled();
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    getAndSetAddress();
  }, [getAndSetAddress, isEnabled]);

  useEffect(() => {
    if (!isEnabled || !policyId) {
      return;
    }

    getAndSetAssets();
  }, [getAndSetAssets, isEnabled, policyId]);

  return { address, assets, enable, isEnabled, loading };
};
