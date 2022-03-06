import { color, font, space } from './tokens';

export const globalStyles = {
  'html,body': {
    background: color.background,
    color: color.primary,
    fontFamily: font.body,
    fontSize: 16,
    fontWeight: 400,
    margin: 0,
    padding: 0,
  },

  a: {
    borderBottom: '1px dotted',
    color: color.accent,
    textDecoration: 'none',

    ':active': {
      borderBottom: '1px solid',
      textDecoration: 'none',
    },

    ':hover': {
      borderBottom: '1px solid',
      textDecoration: 'none',
    },
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: font.head,
    marginBottom: space.xs,
    marginTop: space.medium,
  },

  h1: {
    fontSize: font.size.title,
  },

  h2: {
    fontSize: font.size.heading1,
  },

  h3: {
    fontSize: font.size.heading2,
  },

  h4: {
    fontSize: font.size.heading3,
  },

  'ol, ul': {
    marginTop: 0,
    marginBottom: 0,
  },

  p: {
    marginTop: 0,
  },

  'p:last-of-type': {
    marginBottom: 0,
  },
};
