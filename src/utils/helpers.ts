export const randomIntBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const isSSR: boolean = (() => typeof window === 'undefined')();

export const fromHex = (hex: string) => {
  let str = '';

  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }

  return str;
};

export const withOrdinalSuffix = (i: number) => {
  const j = i % 10;
  const k = i % 100;

  if (j == 1 && k != 11) return i + 'st';
  if (j == 2 && k != 12) return i + 'nd';
  if (j == 3 && k != 13) return i + 'rd';

  return i + 'th';
};

export const toQueryString = (params: object) => {
  let query = '';

  for (const key in params) {
    if (!params[key]) {
      continue;
    }

    query += `${key}=${params[key]}&`;
  }

  return query.replace(/\&$/, '');
};

export const assetNamesToEndpoints = (endpointPrefix: string, tokenPrefix: string, assetNames: string[]) => {
  const endpoints: string[] = [];

  for (let i = 0; i < assetNames.length; i++) {
    const assetName = assetNames[i];
    const edition = assetName.substring(tokenPrefix.length);
    const endpoint = `${endpointPrefix}/${edition}`;

    endpoints.push(endpoint);
  }

  return endpoints;
};

export const defaultFilterPayload = {
  edition: '',
  background: '',
  type: '',
  mouth: '',
  eyes: '',
  implant_nodes: '',
  head: '',
  accessories: '',
  minRank: '',
  maxRank: '',
  onSale: null,
  isAuction: null,
  minPrice: '',
  maxPrice: '',
  sort: '',
  direction: '',
};
