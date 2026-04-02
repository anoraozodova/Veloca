import { useState, useEffect, useRef } from 'react'

export function useTypewriter(target: string, trigger?: number) {
  const [displayed, setDisplayed] = useState(target)
  const [isBusy, setIsBusy] = useState(false)
  const isFirstRender = useRef(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      setDisplayed(target)
      setIsBusy(false)
      return
    }

    // Сбрасываем отображаемый текст в target сразу, 
    // чтобы стирать именно то слово, которое выбрали
    setDisplayed(target)
    setIsBusy(true)

    const clear = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    clear()

    // 1. Стираем текущий текст
    intervalRef.current = setInterval(() => {
      setDisplayed((cur) => {
        if (cur.length === 0) {
          clear()

          // 2. Начинаем печатать новый текст
          let idx = 0
          intervalRef.current = setInterval(() => {
            setDisplayed(target.slice(0, idx + 1))
            idx++
            if (idx >= target.length) {
              clear()
              setIsBusy(false)
            }
          }, 60) // Скорость печати (увеличено по просьбе User)

          return ''
        }
        return cur.slice(0, -1)
      })
    }, 20) // Скорость стирания

    return clear
  }, [target, trigger])

  return { text: displayed, isBusy }
}
