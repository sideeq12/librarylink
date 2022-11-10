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
            <Link href="upgrades">Upgrade Guide</Link>
          </li>
          <li>
            <Link href="tour">Take tour</Link>
          </li>
          <li>
            <Link href="parsing">Parsing</Link>
          </li>
          <li>
            <Link href="documentation">API docs</Link>
          </li>
          <li>
            <Link href="calendar">Calender</Link>
          </li>
          <li>
            <Link href="format">Formating</Link>
          </li>
          <li>
            <Link href="feautures">Features</Link>
          </li>
          <li>
            <Link href="packages">Packages</Link>
          </li>
          <li>
            <Link href="modification">Modifications</Link>
          </li>
          <li>
            <Link href="contribution">Contributions</Link>
          </li>
        </ul>
      </div>
    </Menus>
    <Icons onClick={()=>{setActive(!active)}}>
    { active ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>}
    </Icons>
    </>
  )
}

export default Menu ;