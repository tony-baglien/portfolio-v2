import { Header } from "./layout/Header"
import About from "./layout/About/About.jsx"
import Projects from "./layout/Projects/Projects.jsx"
import Footer from "./layout/Footer/Footer.jsx"
import Canvas from "./Canvas/Canvas.jsx"
function App() {
  return (
    <>
      <Canvas />
      <Header />
      <About />
      <Projects />
      <Footer />
    </>

  )
}

export default App
