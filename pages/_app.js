import '../styles/globals.css'
import Menu from '../components/menuList/menu'
import Tag from "../components/tag/tag"
import Welcome from '../components/welcome/welcome'

function MyApp({ Component, pageProps }) {
  return <>
  <Welcome />
  <div style={{ "display" : "flex"}}>
  <Menu />
  <Component {...pageProps} />
  </div>
  <Tag />
  </>
}

export default MyApp
