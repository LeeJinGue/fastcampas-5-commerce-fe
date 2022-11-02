import { CONFIG } from "@config";
const isDev = CONFIG.ENV === 'development';
const BASE = isDev ? `http://localhost:3000` : `https://fastcampus-5-commerce-fe.vercel.app`
export const SOCIAL = {
  KAKAO_CLIENT_ID: CONFIG.AUTH_KAKAO_CLIENT_KEY,
  REDIRECT_URL: `${BASE}/social_login/callback`,
};
