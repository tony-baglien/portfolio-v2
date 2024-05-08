import React, { useRef, useEffect } from 'react'
const Canvas = () => {
  const canvasRef = useRef(null)

  class Circle {
    constructor(circleObj) {
      this.xpos = circleObj.xpos;
      this.ypos = circleObj.ypos;
      this.radius = circleObj.radius;
      this.color = circleObj.color;
      this.vx = circleObj.vx;
      this.vy = circleObj.vy;

    }
    colorUpdate() {
      let colorArray = ['#F2AEDB', '#7166D2', '#E44F6A']
      const min = 0;
      const max = 2;
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      let randomInterval = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
      let chosenColor = colorArray[randomInterval]

      return chosenColor
    }
    draw(context) {
      this.update();
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2)
      context.fill();
    }
    update() {
      this.xpos += this.vx;
      this.ypos += this.vy;
      if (this.xpos > document.body.clientWidth - this.radius || this.xpos < this.radius) {
        this.vx = -this.vx
      }
      if (this.ypos > document.body.clientHeight - this.radius || this.ypos < this.radius) {
        this.vy = -this.vy
      }
    }
  }
  function getRandomColor() {
    let colorArray = ['#F2AEDB', '#7166D2', '#E44F6A']
    const min = 0;
    const max = 2;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let randomInterval = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    let chosenColor = colorArray[randomInterval]

    return chosenColor
  }
  function getRandomRadius() {
    let radiusArray = [[5, 1.25], [50, -1], [75, .75], [125, .5]]
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(4);
    const randomIndex = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    return radiusArray[randomIndex]
  }
  useEffect(() => {
    const canvas = canvasRef.current
    //set canvas size
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    const context = canvas.getContext('2d')
    let animationFrameId

    let circleArray = []
    let circleNumber = 14;

    for (let i = 0; i < circleNumber; i++) {
      let x = Math.random() * document.body.clientWidth;
      let y = () => {
        let max = window.innerHeight
        let min = 0;
        return Math.random() * (max - min) + min
      }
      let randomRadDistance = getRandomRadius();
      let radius = randomRadDistance[0]
      let vx = randomRadDistance[1]
      let vy = randomRadDistance[1]
      let circle = new Circle({
        xpos: x,
        ypos: y(),
        radius: radius,
        vx: -vx,
        vy: vy,
        color: getRandomColor()
      })

      circleArray.push(circle)
    }

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      circleArray.forEach(circle => {
        circle.draw(context)
      })
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  })
  return <canvas className="transition absolute  left-0 top-0 blur-3xl " ref={canvasRef} />
}

export default Canvas
