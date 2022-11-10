import React from 'react'
import  style from "./mywelcome.module.css"
import { Image } from "next/image"

function Welcome() {
  return (
        <div  className={style.welcome}>
          {/* <Image src="/mylogo.png" width={500} height={500} alt="company logo" /> */}
          <h2>LowPoly</h2>
            <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </h3>
            <label>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            </label>
            <label>
            Lorem ipsum dolor sit amet, consectetur 
            </label>
            <label>
            Lorem ipsum dolor sit amet, 
            </label>
            <span>
              <button className={style.github}>Github</button>
              <button className={style.more}>Get started</button>
            </span>
        </div>
  )
}

export default Welcome;