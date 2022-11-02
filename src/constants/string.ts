import { CONFIG } from "@config"
import { ROUTES } from "./routes"

export const DRAWER_MENU_ITEM_LIST = ["홈", "상품보기", "마이페이지"]
export const KAKAO_BUTTON_STRING = "카카오 계정으로 로그인"
export const BADGE_NAME_LIST = ["전체", "바스&샴푸", "오일", "로션", "크림", "파우더 로션"]
export const PROFILE_EXAMPLE = "https://www.naver.com"
export const WITHDRAWAL_REASONS = ["아이디 변경(재가입)", "낮은 구매 빈도", "서비스 및 고객지원 불만족", "타 브랜드 이용", "기타"]
export const ADDITIONAL_REASON_TEXT = "기타"
export const WITHDRAWAL_EXPLANATION_TEXT = "회원 탈퇴 시 개인 정보 및 인코스런에서 만들어진 모든 데이터는 삭제됩니다. 한 번 삭제된 정보는 복구가 불가능합니다."
export const INSTGRAM_URL = "https://www.instagram.com/"
export const ORDER_STATUS = {
  READY: "결제 준비중",
  IN_PROGRESS: "결제 진행중",
  WAITING_FOR_DEPOSIT: "입금 대기중",
  DONE: "결제 완료",
  CANCELED: "결제 취소",
  PARTIAL_CANCELED: "결제 부분 취소",
  ABORTED: "결제 중단",
  EXPIRED: "결제 만료",
}
export const status_to_shipping_status = (status: string) =>{
  switch(status){
    case "PAID": return "결제 완료"
    case "WAIT": return "배송 준비중 "
    case "INPROGRESS": return "배송중 "
    case "DONE": return "배송 완료"
    case "CANCELED": return "배송 취소"
    default: "이상함"
  }
}
export const TOSS_PAYMENT_SUCCESS_URL = `${CONFIG.DOMAIN}${ROUTES.PAYMENT.SUCCESS}`