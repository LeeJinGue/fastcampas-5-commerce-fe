import { CONFIG } from "@config";
import { ROUTES } from "./routes";
const isDev = CONFIG.ENV === 'development';
const BASE = isDev ? `http://localhost:3000` : `https://fastcampus-5-commerce-fe.vercel.app`
export const SOCIAL = {
  KAKAO_CLIENT_ID: CONFIG.AUTH_KAKAO_CLIENT_KEY,
  REDIRECT_URL: `${BASE}/social_login/callback`,
};
export const DAUM_ADDRESS_SCRIPT_URL = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
