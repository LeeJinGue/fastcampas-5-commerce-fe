export const ROUTES = {
  //@delete:line
  HOME: '/',
  //@delete:line
  LOGIN: '/login',
  //@delete:line
  SIGNUP: {
    //@delete:line
    MAIN: '/signup',
    //@delete:line
    SUCCESS: '/signup/success'
  },
  //@delete:line
  PRODUCTS: '/products',
  //@delete:line
  PRODUCTS_DETAIL: (id: string) => `/products/${id}`,
  //@delete:line
  PAYMENT: {
    //@delete:line
    MAIN: '/payment',
    //@delete:line
    SUCCESS: '/payment/success',
  },
  //@delete:line
  CART: '/cart',
  //@delete:line
  MYPAGE: {
    //@delete:line    
    MAIN: '/mypage',
    //@delete:line
    EDIT_INFO: '/mypage/editinfo',
    //@delete:line
    ORDER_HISTORY: '/mypage/orderhistory',
    //@delete:line
    WRITE_REVIEW: '/mypage/orderhistory/writereview',
    //@delete:line
    MY_REVIEWS: '/mypage/myreviews',
    //@delete:line
    WITHDRWAL: '/mypage/withdrwal',
  },
  STARTER_DOCS: {
    //@delete:line
    MAIN: '/starter-docs',
    //@delete:line
    THEME_VIEWER: '/starter-docs/theme-viewer',
    //@delete:line
    EXAMPLES: {
      //@delete:line
      MAIN: '/starter-docs/examples',
      //@delete:line
      COUNTER: '/starter-docs/examples/counter',
      //@delete:line
      FORM: '/starter-docs/examples/form',
      //@delete:line
      MODALS: '/starter-docs/examples/modals',
      //@delete:line
      SOCIAL: '/starter-docs/examples/social',
      //@delete:line
      LODASH: '/starter-docs/examples/lodash',
      //@delete:line
      S3_FILE_INPUT: '/starter-docs/examples/file-input',
    },
  },
} as const;
