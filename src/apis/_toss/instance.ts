import { CONFIG } from '@config'
import { loadTossPayments } from '@tosspayments/payment-sdk'
const CLIENT_KEY = CONFIG.TOSS_CLIENT_KEY!

export const tossInstance = () => {
  return loadTossPayments(CLIENT_KEY)
}