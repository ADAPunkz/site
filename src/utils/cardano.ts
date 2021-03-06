import { Buffer } from 'buffer';

import { fromHex, isSSR } from './helpers';

class WasmLoader {
  private _csl: typeof import('@emurgo/cardano-serialization-lib-browser');

  async load() {
    if (this._csl) {
      return;
    }

    this._csl = await import('@emurgo/cardano-serialization-lib-browser');
  }

  get CSL() {
    return this._csl;
  }
}

const loader = new WasmLoader();

let deprecatedApi = false;

if (!isSSR && !Boolean((window as any).cardano?.nami)) {
  deprecatedApi = true;
  (window as any).cardanoApi = (window as any).cardano;
}

const nami = isSSR ? null : (window as any).cardano?.nami || (window as any).cardano;
const hasNami = Boolean(nami);

const walletApi = () => (window as any).cardanoApi;

const isEnabled = async () => (await nami.isEnabled()) as boolean;

const enable = async () => {
  try {
    const api = (await nami.enable()) as boolean;

    if (!isSSR && !deprecatedApi) {
      (window as any).cardanoApi = api;
    }

    return true;
  } catch {
    return false;
  }
};

const getAddress = async () => {
  await loader.load();
  await enable();

  const address = (await walletApi().getUsedAddresses())[0] as string;

  return loader.CSL.Address.from_bytes(Buffer.from(address, 'hex')).to_bech32();
};

const getAssetNames = async (policyId: string) => {
  const assetNames: string[] = [];

  await enable();

  const hex = (await walletApi().getBalance()) as string;
  const bytes = Buffer.from(hex, 'hex');

  await loader.load();

  const csl = loader.CSL;
  const balance = csl.Value.from_bytes(bytes);
  const allAssets = balance.multiasset();

  if (!allAssets) {
    return assetNames;
  }

  const assetTypes = allAssets.keys();

  for (let i = 0; i < assetTypes.len(); i++) {
    const policyHash = assetTypes.get(i);
    const policyHex = Buffer.from(policyHash.to_bytes()).toString('hex');

    if (policyHex !== policyId) {
      continue;
    }

    const assets = allAssets.get(policyHash);
    const assetsKeys = assets.keys();

    for (let j = 0; j < assetsKeys.len(); j++) {
      const assetHash = assetsKeys.get(j);
      const assetHex = Buffer.from(assetHash.name()).toString('hex');
      const assetName = fromHex(assetHex);

      assetNames.push(assetName);
    }
  }

  return assetNames;
};

export const cardano = {
  hasNami,
  isEnabled,
  enable,
  getAddress,
  getAssetNames,
};
