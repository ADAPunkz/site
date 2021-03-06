import { BackgroundType, FillType } from 'grommet/utils';
import { FC } from 'react';

export type Trait = {
  percent: number;
  value: string;
};

export type Offer = {
  user: string;
  value: number;
  expires: string;
};

export interface Nft {
  name: string;
  edition: number;
  score: number;
  rank: number;
  image: string;
  ipfs: string;
  onSale: boolean;
  isAuction: boolean;
  salePrice: number;
  marketName: string;
  marketUrl: string;
  listedAt: string;
  minted: boolean;
  mintedAt: string;
  offers: Offer[];
}

export interface PunkzNft extends Nft {
  background: Trait;
  type: Trait;
  mouth: Trait;
  eyes: Trait;
  implant_nodes: Trait;
  head: Trait;
  accessories: Trait;
}

export interface CollageNft extends Nft {
  type: Trait;
  tier: Trait;
}

export type NftProps<T extends Nft> = {
  metadata: T;
  path: string;
}

export type NftDetails = {
  attributes?: FC<any>;
  ignoreConstraint?: boolean;
}

export type NftDetailsProps<T extends Nft> = NftDetails & NftProps<T>; 

export type NftDetailsTicker<T extends Nft> = {
  nfts: T[];
  title: string;
  indentTitle?: boolean;
  background?: BackgroundType;
  fill?: FillType;
  pathSelector?: (nft: T) => string;
}

export type NftDetailsTickerProps<T extends Nft> = NftDetails & NftDetailsTicker<T>;

export type AssetLoaderProps = {
  endpoint: string;
  children: (nft: Nft, isFetched: boolean) => JSX.Element;
}

export type NftApiResponse<T extends Nft> = {
  results: T[];
  resultsCount: number;
  nextPage: number;
  pageSize: number;
};

export type CollageTraitsResponse = {
 types: AttributeRarity[];
 tiers: AttributeRarity[];
};

export type AttributeList = {
  background: string[];
  type: string[];
  mouth: string[];
  eyes: string[];
  implant_nodes: string[];
  head: string[];
  accessories: string[];
};

export type AttributeRarity = {
  value: string;
  rarity: number;
  percent: number;
};

export type AttributeRarityList = {
  background: AttributeRarity[];
  type: AttributeRarity[];
  mouth: AttributeRarity[];
  eyes: AttributeRarity[];
  implant_nodes: AttributeRarity[];
  head: AttributeRarity[];
  accessories: AttributeRarity[];
};

export type NftFilterForm = {
  edition: string;
  background: string;
  type: string;
  mouth: string;
  eyes: string;
  implant_nodes: string;
  head: string;
  accessories: string;
  minRank: string;
  maxRank: string;
  onSale?: string;
  isAuction?: string;
  minPrice: string;
  maxPrice: string;
  sort: string;
  direction: string;
};

export type AddressBalance = {
  stakeAddress: string;
  balance: number;
};

export type MintingAddress = {
  address: string;
  isActive: boolean;
}

export type EventAction = {
  type: string;
  [key: string]: any;
};

export type SiteState = {
  address: string;
  setAddress: (to: string) => void;
  assets: string[];
  setAssets: (to: string[]) => void;
  filterPayload: NftFilterForm;
  setFilterPayload: (to: NftFilterForm) => void;
};

export type WhitelistCheck = {
  address: string;
  isWhitelisted: boolean;
};

export type PoolInfo = {
  blocksMinted: number;
  blocksEpoch: number;
  liveStake: number;
  liveSize: number;
  liveSaturation: number;
  liveDelegators: number;
  activeStake: number;
  activeSize: number;
  declaredPledge: number;
  livePledge: number;
  marginCost: number;
  fixedCost: number;
};
