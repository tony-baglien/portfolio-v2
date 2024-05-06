import Tilt from "react-parallax-tilt"
const Container = ({ className, children }) => {

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <div className={`w-full p-8 my-2 glass rounded-xl ${className} `} > {children}</div >
    </Tilt>
  )
}
export default Container 
