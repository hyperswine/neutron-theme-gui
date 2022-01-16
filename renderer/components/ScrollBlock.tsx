import { useRef } from "react"

// seems to block the scroll of the entire page, maybe just do it to the desktop component or something?
// is there someway to isolate the scrolling behavior of the page from a component? prob not
const useScrollBlock = () => {
  const scroll = useRef(false)

  const blockScroll = () => {
    if (typeof document === "undefined") return

    const html = document.documentElement
    const { body } = document

    if (!body || !body.style || scroll.current) return

    const scrollBarWidth = window.innerWidth - html.clientWidth
    const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0

    html.style.position = "relative" /* [1] */
    body.style.position = "relative" /* [1] */
    html.style.overflow = "hidden" /* [2] */
    body.style.overflow = "hidden" /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`

    scroll.current = true
  }

  const allowScroll = () => {
    if (typeof document === "undefined") return

    const html = document.documentElement
    const { body } = document

    if (!body || !body.style || !scroll.current) return

    html.style.position = ""
    html.style.overflow = ""
    body.style.position = ""
    body.style.overflow = ""
    body.style.paddingRight = ""

    scroll.current = false
  }

  return [blockScroll, allowScroll]
}

export default useScrollBlock