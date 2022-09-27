
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