import React from "react"
export type usePrevDupClickProp = {
  callBack: () => void,
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