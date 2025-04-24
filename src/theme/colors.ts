// Color palette derived from the Mutual Horizon logo
export const colors = {
  primary: {
    50: '#e6f7ff',
    100: '#b3e7ff',
    200: '#80d6ff',
    300: '#4dc6ff',
    400: '#26b9ff',
    500: '#00aaff', // Electric blue from logo
    600: '#0088cc',
    700: '#006699',
    800: '#004466',
    900: '#002233',
  },
  secondary: {
    50: '#e6f0ff',
    100: '#b3d1ff',
    200: '#80b3ff',
    300: '#4d94ff',
    400: '#1a75ff',
    500: '#0056cc',
    600: '#004099',
    700: '#002b66',
    800: '#001533',
    900: '#000a1a', // Darkest blue
  },
  accent: {
    50: '#e6ffff',
    100: '#b3ffff',
    200: '#80ffff',
    300: '#4dffff',
    400: '#1affff',
    500: '#00e6e6', // Glowing cyan from logo
    600: '#00b3b3',
    700: '#008080',
    800: '#004d4d',
    900: '#002626',
  },
  background: {
    dark: '#0a1a2f', // Dark navy from logo
    darker: '#05101d', // Darker navy for contrasts
    card: '#0e2a47', // Deep blue from logo
    light: '#153654', // Lighter blue for hover states
  },
  text: {
    primary: '#ffffff',
    secondary: '#b3d1ff',
    muted: '#8ba4c6',
    disabled: '#5d718c',
  },
  success: {
    main: '#2cbb92',
    light: '#5dd0ac',
    dark: '#1a9972',
  },
  warning: {
    main: '#ffab2c',
    light: '#ffc066',
    dark: '#cc8a23',
  },
  error: {
    main: '#ff4c4c',
    light: '#ff7373',
    dark: '#cc3d3d',
  },
};

// Named colors for easier reference
export const appColors = {
  bgPrimary: colors.background.dark,
  bgSecondary: colors.background.card,
  bgTertiary: colors.background.light,
  bgDark: colors.background.darker,
  textPrimary: colors.text.primary,
  textSecondary: colors.text.secondary,
  textMuted: colors.text.muted,
  primaryBlue: colors.primary[500],
  primaryDark: colors.primary[700],
  accentCyan: colors.accent[400],
  accentGlow: colors.accent[300],
};