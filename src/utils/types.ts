import { HeightType, WidthType } from 'grommet/utils';

export type Trait = {
  percent: number;
  value: string;
};

export type Offer = {
  user: string;
  value: number;
  expires: string;
};

export type NftType = {
  name: string;
  edition: number;
  score: number;
  rank: number;
  image: string;
  ipfs: string;
  background: Trait;
  type: Trait;
  mouth: Trait;
  eyes: Trait;
  implant_nodes: Trait;
  head: Trait;
  accessories: Trait;
  onSale: boolean;
  isAuction: boolean;
  salePrice: number;
  marketName: string;
  marketUrl: string;
  listedAt: string;
  minted: boolean;
  offers: Offer[];
};

export type NftProps = {
  metadata: NftType;
  width?: WidthType;
  height?: HeightType;
};

export type NftApiResponse = {
  results: NftType[];
  resultsCount: number;
  nextPage: number;
  pageSize: number;
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
}
