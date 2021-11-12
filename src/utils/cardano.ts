import { Buffer } from 'buffer';

import { fromHex, isSSR } from './helpers';

class Loader {
  private _csl: any;

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

const CslLoader = new Loader();

const nami = isSSR ? ({} as any) : (window as any).cardano;

const hasNami = !!nami;

const isEnabled = async () => {
  return (await nami.isEnabled()) as boolean;
};

const enable = async () => {
  try {
    return (await nami.enable()) as boolean;
  } catch {
    return false;
  }
};

const getAddress = async () => {
  await CslLoader.load();

  const address = (await nami.getUsedAddresses())[0] as string;

  return CslLoader.CSL.Address.from_bytes(Buffer.from(address, 'hex')).to_bech32();
};

const getAssetNames = async (policyId: string) => {
  const assetNames: string[] = [];

  const hex = (await nami.getBalance()) as string;
  const bytes = Buffer.from(hex, 'hex');

  await CslLoader.load();

  const csl = CslLoader.CSL;
  const balance = csl.Value.from_bytes(bytes);
  const allAssets = balance.multiasset();
  const assetTypes = allAssets.keys();

  for (var i = 0; i < assetTypes.len(); i++) {
    const policyHash = assetTypes.get(i);
    const policyHex = Buffer.from(policyHash.to_bytes()).toString('hex');

    if (policyHex !== policyId) {
      continue;
    }

    const assets = allAssets.get(policyHash);
    const assetsKeys = assets.keys();

    for (var j = 0; j < assetsKeys.len(); j++) {
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
