import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ToC.scss';

interface Header {
  id: string
  text: string
  tag: string
}

const ToC = () => {
  const [headers, setHeader] = useState<Header[]>([]);
  const { route } = useParams() as {
    route: string;
  }

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
  }, [route])

  return (
    <aside id="table">
      <span>Table of Contents</span>
      {headers.map((hder, index) => (
        <a className={hder.tag === "H2" ? "h2-table" : ""}href={hder.id} key={index}>
          {hder.text}
        </a>
      ))}
    </aside>
  )
}

export default ToC;
