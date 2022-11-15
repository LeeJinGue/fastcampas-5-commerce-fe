import { CONFIG } from "@config"
import { ROUTES } from "./routes"
const isDev = CONFIG.ENV === 'development';
const BASE = isDev ? `http://localhost:3000` : `https://fastcampus-5-commerce-fe.vercel.app`
export const TOSS_PAYMENT_CALL_BACK_URL = `${BASE}/${ROUTES.PAYMENT.CALLBACK}`
export const TOSS_AUTH_HEADER = `Basic ${btoa(CONFIG.TOSS_SECRET_KEY+":")}`
export const TOSS_API_BASE_URL = 'https://api.tosspayments.com'