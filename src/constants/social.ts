import { CONFIG } from "@config";

export const SOCIAL = {
  KAKAO_CLIENT_ID: CONFIG.AUTH_KAKAO_CLIENT_KEY,
  KAKAO_CLIENT_ID_ME: CONFIG.AUTH_KAKAO_MYKEY,
  NAVER_CLIENT_ID: '',
  FACEBOOK_CLIENT_ID: '',
  GOOGLE_CLIENT_ID: '',
  APPLE_CLIENT_ID: '',
  REDIRECT_URL_ME: 'http://127.0.0.1:3000/social_login/callback',
  REDIRECT_URL: `http://localhost:3000/social_login/callback`,
  
};
