import Link from 'next/link';
import React, { useState } from 'react'
import style from "./menustyle.module.css"
import {Menus, Icons} from "./mensty"

function Menu () {
  const [active , setActive ] = useState(false)
  return (
    <>
    <Menus active={active}>
      <label>LowPoly</label>
      <div className="list">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="installation">Install guide</Link>
          </li>
          <li>
            <Link href="">Upgrade Guide</Link>
          </li>
          <li>
            <Link href="">Take tour</Link>
          </li>
          <li>
            <Link href="">Parsing</Link>
          </li>
          <li>
            <Link href="">API docs</Link>
          </li>
          <li>
            <Link href="">Calender</Link>
          </li>
          <li>
            <Link href="">Formating</Link>
          </li>
          <li>
            <Link href="">Features</Link>
          </li>
          <li>
            <Link href="">Packages</Link>
          </li>
          <li>
            <Link href="">Modifications</Link>
          </li>
          <li>
            <Link href="">Contributions</Link>
          </li>
        </ul>
      </div>
    </Menus>
    <Icons onClick={()=>{setActive(!active)}}>
    { active ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>}
    </Icons>
    </>
  )
}

export default Menu ;