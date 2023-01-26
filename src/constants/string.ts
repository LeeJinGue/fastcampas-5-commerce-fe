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

// FOOTER
export const footer_string = {
  TEAM_NAME: "INCOURSE.RUN",
  TEAM_MEMBER:"이진규",
  TEAM_EMAIL: "hippo9851@gmail.com",
  COPYRIGHTS: "ⓒINCOURSE.RUN All Right Reserved",
}

// POPUP
export const cart_popup_string = {
  // 장바구니 담기 후 팝업
  bodyText : '장바구니에 상품이 담겼습니다.',
  okText : '쇼핑 게속하기',
  cancelText : '장바구니 이동'
}
export const complete_review_popup_string = {
  // 리뷰 작성 완료 후 팝업
  bodyText : '리뷰작성이 완료되었습니다.',
  okText : '확인',
}
export const complete_withdrwal_popup_string = {
  // 탈퇴완료 후 팝업
  bodyText : '탈퇴가 완료되었습니다.',
  okText : '확인',
}
export const check_logout_popup_string = {
  // 로그아웃 확인 팝업
  bodyText : '로그아웃 하시겠습니까?',
  okText : '확인',
  cancelText : '취소'
}
export const check_order_cancel_popup_string = {
  // 주문취소 확인 팝업
  bodyText : '주문취소 하시겠습니까?',
  okText : '확인',
  cancelText : '취소'
}
export const complete_profile_modify_popup_string = {
  // 회원정보 수정 완료 후 팝업
  bodyText : '회원정보 수정이 완료되었습니다.',
  okText : '확인',
}
export const complete_order_cancel_popup_string = {
  // 주문취소 완료 후 팝업
  bodyText : '주문취소가 완료되었습니다.',
  okText : '확인',
}
export const complete_payment_popup_string = {
  // 결제 완료 후 팝업
  bodyText : '결제가 완료되었습니다.',
}
