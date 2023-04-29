import React from "react"
export type usePrevDupClickProp = {
  callBack: () => void,
  time?: number,
}
export type usePrevDupSubmitProp = {
  callBack:React.FormEventHandler<HTMLDivElement> | undefined
  time?: number,
}


export const usePrevDupClick = ({callBack, time = 300}:usePrevDupClickProp) => {
  const [id, setId] = React.useState<NodeJS.Timeout>()
  const onClick = () => {
    if(id){
      clearTimeout(id)      
    }
    setId(setTimeout(callBack, time))
  }
  return {oneOnclick: onClick}
}
export const usePrevDupSubmit = ({callBack, time = 300}:usePrevDupSubmitProp) => {
  const [id, setId] = React.useState<number>()
  const onSubmit = () => {
    if(id){
      clearTimeout(id)      
    }
    if(callBack){
      setId(setTimeout(callBack, time))
    }
  }
  return {oneOnSubmit: onSubmit}
}