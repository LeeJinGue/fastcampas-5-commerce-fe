import React, { useCallback, useState } from 'react'
interface useCheckListProps{
  length: number,
  initVal: boolean,
}
// 체크리스트 관리 훅
function useCheckList({length, initVal}: useCheckListProps) {
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [checkList, setCheckList] = useState<boolean[]>(Array.from({length}, v=>initVal))
  const changeByIndex = useCallback(
    (index: number, value:boolean) => {
      const newCheckList = checkList.concat([])
      newCheckList[index] = value
      setCheckList(newCheckList)
    },[checkList],)
  const setAllCheck = useCallback((value:boolean) => {
    setIsAllCheck(value)
    setCheckList(Array.from({length}, v=>value))
  },[checkList])
  return {checkList, setCheckList, changeByIndex, setAllCheck, isAllCheck}
}
export default useCheckList