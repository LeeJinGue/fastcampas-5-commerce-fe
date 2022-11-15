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
    CALLBACK: '/payment/callback',
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
  EVENTINFO: '/eventinfo',
  INQUIRY: '/inquiry',
} as const;
