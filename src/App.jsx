import MediaQuery from "react-responsive"
import { Header } from "./layout/Header"
import { MobileHeader } from "./layout/MobileHeader"
import About from "./layout/About/About.jsx"
import Projects from "./layout/Projects/Projects.jsx"
import Footer from "./layout/Footer/Footer.jsx"
import Canvas from "./Canvas/Canvas.jsx"
import gsap from "gsap"
function App() {
  const colors = gsap.utils.toArray(".colorScroll");
  colors.forEach(color => {
    gsap.to(color, {
      color: '#ffdae8',
      scrollTrigger: {
        markers: true
      }
    })
  })

  return (
    <>
      <Canvas />
      <MediaQuery minWidth={768}>
        <Header />
      </MediaQuery >
      <MediaQuery maxWidth={768}>
        <MobileHeader />
      </MediaQuery>
      <About />
      <Projects />
      <Footer />
    </>

  )
}

export default App
