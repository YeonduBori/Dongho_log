import { useEffect, useRef } from 'react'

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.setAttribute('repo', 'YeonduBori/Dongho_log')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'github-light')
    script.setAttribute('crossorigin', 'anonymous')
    ref.current.append(script)
  }, [])

  return <div ref={ref} style={{ width: '100%' }}></div>
}
