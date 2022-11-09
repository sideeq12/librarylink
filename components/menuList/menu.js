import Link from 'next/link';
import React from 'react'
import style from "./menustyle.module.css"

function Menu () {
  return (
    <div className={style.Menu}>
      <label>LowPoly</label>
      <div className={style.list}>
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
    </div>
  )
}

export default Menu ;