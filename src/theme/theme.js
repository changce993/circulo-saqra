const theme = {
  colors: {
    primary: '#F95959',
    darkPrimary: '#E05050',
    lightPrimary: '#FFEEEE',
    
    secondary: '#FFC404',
    lightSecondary: '#FFE9BF',

    black: '#010104',
    lightBlack: '#343146',
    darkBg: '#343146',
    
    gray: '#CCCCCC',
    darkGray: '#909090',
    lightGray: '#F2F2F2',
    bgGray: '#f9f9ff',
    
    error: '#F95959',
    lightError: '#FFF6F6',
    info: '#448AFA',
    lightInfo: '#F5F9FF',
    warning: '#FECE45',
    success: '#1CA751',
    lightSuccess: '#F3FBF6',
    white: '#FFF',
    transparent: 'rgba(255,255,255,.0)'
  },
  fontSize: {
    tiny: '10px',
    label: '12px',
    caption: '14px',
    text: '16px',
    body: '18px',
    header: '20px',
    subtitle: '24px',
    title: '32px',
    display: '40px',
    display1: '48px',
    display2: '64px',
    display3: '72px',
    display4: '80px',
    display5: '96px',
    marquee: '240px',
  },
  fontFamily: {
    primary: "'Red Rose', cursive",
    secondary: '',
  },
  transition: {
    default: '.3s'
  },
  rounded: {
    xs: '.25rem',
    sm: '.5rem',
    md: '.75rem',
    lg: '1rem',
    xl: '2rem',
    circle: '50%',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  is: {
    xs: '@media(max-width: 450px)',
    sm: '@media(max-width: 600px)',
    md: '@media(max-width: 900px)',
    lg: '@media(max-width: 1220px)',
    xl: '@media(max-width: 1440px)',
    xxl: '@media(max-width: 1920px)',
    xxxl: '@media(max-width: 2560px)',
  },
  shadow: {
    1: '0 4px 10px 0 rgba(10,22,40,0.10)',
  },
};

export default theme;
