const theme = {
  size: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
  color: {
    veryDarkGray: 'hsl(0, 0%, 17%)',
    darkGrey: 'hsl(0, 0%, 59%)',
    white: '#fff',
  },
  font: {
    size: {
      input: '18px',
    },
    weight: {
      regular: '400',
      medium: '500',
      bold: '700',
    }
  }
};

type themeType = typeof theme;
export { theme };
export type { themeType };
