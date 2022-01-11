import { useEffect, useState } from 'react';
import './ToC.scss';

interface Header {
  id: string
  text: string
  tag: string
}

const ToC = () => {
  const [headers, setHeader] = useState<Header[]>([]);

  useEffect(() => {
    let hders: Header[] = []
    document.querySelectorAll<HTMLElement>("h1, h2").forEach(header => {
      hders.push({
        id: `#${header.id}`,
        text: header.innerText,
        tag: header.tagName
      })
    })
    setHeader(hders);
  }, [])

  const toggle = () => {
    let table = document.getElementById('table')!
    table.style.display = table.style.display === "" ? "grid" : ""
  }

  return (
    <div id="toc">
      <button onClick={toggle}>
        <svg viewBox="0 0 24 24">
          <path d="M2 6h1m5 0h14M2 12h1m5 0h14M2 18h1m5 0h14"/>
        </svg>
      </button>
      <div id="table">
        {headers.map((hder, index) => (
          <a href={hder.id} onClick={toggle} key={index}>
            {hder.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ToC;
