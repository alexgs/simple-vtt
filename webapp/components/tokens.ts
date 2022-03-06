// These breakpoints are based on [Tailwind's defaults][1]
// [1]: https://tailwindcss.com/docs/breakpoints
export const breakpoint = {
  medium: '@media screen and (min-width: 768px)',
  large: '@media screen and (min-width: 1024px)',
};

// All the color options I want to remember but not necessarily export
const colorOptions = {
  background: {
    charcoal: 'rgb(17, 17, 17)',
    grey: 'rgb(52, 52, 52)',
  },
  primary: {
    gainsboro: '#DCDCDC',
    lightGray: '#D3D3D3',
    silver: '#C0C0C0',
  },
  rebass: {
    // colors from the Rebass website's dark theme
    accent: 'rgb(255, 0, 187)',
    primary: 'rgb(0, 255, 255)',
    secondary: 'rgb(187, 0, 255)',
  }
};

const colorBase = {
  accent: 'rgb(197 39 255)',
  background: colorOptions.background.charcoal,
  chill: 'rgb(125 255 255)',
  pop: 'rgb(255 96 213)',
  primary: colorOptions.primary.silver,
};

export const color = {
  ...colorBase,
  bg: colorBase.background,
  text: colorBase.primary,
};

const typefaces = {
  montserrat: '\'Montserrat\', sans-serif',
};

export const font = {
  body: typefaces.montserrat,
  head: typefaces.montserrat,
  lineHeight: {
    body: 1.5,
  },
  size: {
    title: '2.5rem', // 40px
    heading1: '2rem', // 32px
    heading2: '1.5rem', // 24px
    heading3: '1.5rem', // 24px
    heading4: '1.25rem', // 20px
    regular: '1rem', // 16px
    kindaSmall: '0.875rem', // 14px
    small: '0.75rem', // 12px
  },
  weight: {
    title: 900,
    heading1: 'bold',
    heading2: 'bold',
    heading3: 300,
    heading4: 100,
  },
};

// This scale is based on [Tailwind's default spacing scale][2]
// [2]: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
const spaceBase = {
  nano: '0.0625rem',
  micro: '0.125rem',
  xtraSmall: '0.25rem',
  small: '0.5rem',
  mediumSmall: '0.75rem',
  medium: '1rem',
  mediumLarge: '1.25rem',
  large: '1.5rem',
  xtraLarge: '2rem',
  kilo: '2.5rem',
  mega: '3rem',
  giga: '4rem',
  tera: '5rem',
  peta: '6rem',
};

export const space = {
  ...spaceBase,
  half: spaceBase.small,
  xs: spaceBase.xtraSmall,
  sm: spaceBase.small,
  ms: spaceBase.mediumSmall,
  md: spaceBase.medium,
  ml: spaceBase.mediumLarge,
  lg: spaceBase.large,
  xl: spaceBase.xtraLarge,
};

// export const z = {
//   backdrop: 1000,
//   menu: 1001,
//   top: 900,
// };
