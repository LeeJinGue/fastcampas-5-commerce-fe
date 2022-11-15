import { string } from "yup"

// POST /v1/payments/confirm
export type TossPostParamType = {
  paymentKey: string,
  orderId: string,
  amount: string,
}

export type TossPostReturnType = {
    mId: string,
    version: string,
    paymentKey: string,
    status: string,
    transactionKey: string,
    lastTransactionKey: string,
    orderId: string,
    orderName: string,
    requestedAt: string,
    approvedAt: string,
    useEscrow: boolean,
    cultureExpense: boolean,
    card: {
      company: string,
      number: number,
      installmentPlanMonths: number,
      isInterestFree: boolean,
      interestPayer?: null,
      approveNo: number,
      useCardPoint: boolean,
      cardType: string,
      ownerType: string,
      acquireStatus: string,
      receiptUrl: string,
      amount: number
    },
    virtualAccount?: null,
    transfer?: null,
    mobilePhone?: null,
    giftCertificate?: null,
    cashReceipt?: null,
    discount?: null,
    cancels?: null,
    secret?: null,
    type: string,
    easyPay?: null,
    country: string,
    failure?: null,
    isPartialCancelable: boolean,
    receipt: {
      url: string
    },
    currency: string,
    totalAmount: number,
    balanceAmount: number,
    suppliedAmount: number,
    vat: number,
    taxFreeAmount: number,
    method: string
  
}