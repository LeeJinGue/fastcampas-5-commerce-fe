import { useRef, useCallback, useEffect } from "react"

export type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void

export const useIntersect = (
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement>(null)
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer)
      })
    },
    [onIntersect]
  )

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(callback, options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options, callback])

  return ref
}
// 출처: https://tech.kakaoenterprise.com/149 [카카오엔터프라이즈 기술블로그 Tech&(테크앤):티스토리]