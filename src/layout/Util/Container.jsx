const Container = ({ className, children }) => {

  return (
    <div className={`w-full p-8 my-2 glass rounded-xl ${className} `} > {children}</div >
  )
}
export default Container 
