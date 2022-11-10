import '../styles/globals.css'
import Menu from '../components/menuList/menu'
import Tag from "../components/tag/tag"
import Welcome from '../components/welcome/welcome'
import {useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
 const HomeChecker = router.route.length
  return <>
  {HomeChecker > 1 ? <></> : 
  <Welcome />}
  <div style={{ "display" : "flex"}}>
  <Menu />
  <Component {...pageProps} />
  </div>
  <Tag />
  </>
}

export default MyApp
