import { ThemeType, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const theme: ThemeType = deepMerge(grommet, {
  global: {
    colors: {
      'brand': {
        dark: '#00AADD',
        light: '#00AADD',
      },
      'background': {
        dark: '#1B4C8C',
        light: '#1B4C8C',
      },
      'background-back': {
        dark: '#111111',
        light: '#EEEEEE',
      },
      'background-front': {
        dark: '#222222',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF11',
        light: '#11111111',
      },
      'text': {
        dark: '#EEEEEE',
        light: '#333333',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444',
      },
      'text-xweak': {
        light: '#666666',
        dark: '#999999',
      },
      'border': {
        dark: '#444444',
        light: '#CCCCCC',
      },
      'punkz-background-front': '#2BCEFF',
      'punkz-background-back': '#19809F',
      'punkz-charcoal': '#333333',
      'control': 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning',
      'focus': '#ffa81d',
    },
    elevation: {
      dark: {
        large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
        medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
        none: 'none',
        small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
        xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
        xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
      },
      light: {
        large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
        medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
        none: 'none',
        small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
        xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
        xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
      },
    },
    breakpoints: {
      small: {
        value: 1080
      }
    },
    font: {
      family: 'VCR',
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
  },
  accordion: {
    border: {
      color: 'text',
    },
    icons: {
      color: 'text',
    },
  },
  list: {
    item: {
      border: {
        side: 'bottom',
        color: 'white',
      },
    },
  },
  layer: {
    background: {
      dark: '#111111',
      light: '#FFFFFF',
    },
  },
  button: {
    border: {
      radius: '0px',
    },
  },
  select: {
    background: 'white',
  },
  textInput: {
    extend: {
      backgroundColor: 'white',
    },
  },
});

export default theme;
