
export type productSimpleType = {
  "id": number,
  "name": string,
  "description": string,
  "price": number,
  "capacity": number,
  "tags": string,
  "avgRate": string,
  "reviewCount": string,
  "created": Date
}
export type productDetialType = {
  "id": number,
  "name": string,
  "description": string,
  "price": number,           
  "capacity": number,        // 용량(ml단위?)
  "detail": string,
  "reviewList": string,
  "avgRate": string,
  "reviewCount": string
}
export const product_detail_data: productDetialType[] = [
  {
    "id": 0,
    "name": "인코스런 바스 & 샴푸",
    "description": "",
    "price": 27000,           
    "capacity": 300,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 바스 & 샴푸",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  {
    "id": 1,
    "name": "인코스런 오일",
    "description": "",
    "price": 27000,           
    "capacity": 150,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 오일",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  {
    "id": 2,
    "name": "인코스런 로션",
    "description": "",
    "price": 27000,           
    "capacity": 250,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 로션",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  {
    "id": 3,
    "name": "인코스런 크림",
    "description": "",
    "price": 27000,           
    "capacity": 125,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 크림",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  {
    "id": 4,
    "name": "인코스런 파우더로션",
    "description": "",
    "price": 27000,           
    "capacity": 100,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 파우더 로션",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  
]
export const product_data: productSimpleType[] = [
  {
    id: 0,
    "name": "바스 & 샴푸",
    "description": "",
    "price": 27000,
    "capacity": 300,
    "tags": "올인원,클렌저,마일드,바스앤샴푸",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  {
    id: 1,
    "name": "오일",
    "description": "",
    "price": 27000,
    "capacity": 150,
    "tags": "올인원,클렌저,마일드,오일",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  {
    id: 2,
    "name": "로션",
    "description": "",
    "price": 27000,
    "capacity": 250,
    "tags": "올인원,클렌저,마일드,로션",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  {
    id: 3,
    "name": "크림",
    "description": "",
    "price": 27000,
    "capacity": 125,
    "tags": "올인원,클렌저,마일드,크림",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  {
    id: 4,
    "name": "파우더로션",
    "description": "",
    "price": 27000,
    "capacity": 100,
    "tags": "올인원,클렌저,마일드,파우더로션",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  
]