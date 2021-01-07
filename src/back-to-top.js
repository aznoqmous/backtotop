export default class BackToTop {
  constructor(trigger, options={}){
    this.trigger = trigger
    this.options = Object.assign({
      container: window,
      speed: 1000 // ms to top
    }, options)

    this.container = this.options.container

    this.bind()
  }

  bind(){
    this.trigger.addEventListener('click', ()=>{ this.toTop() })
  }

  toTop(){
    let startT = Date.now()
    let startY = this.getContainerScroll()
    let speed = startY / this.options.speed
    
    let loop = ()=>{
      let deltaT = (Date.now() - startT) / this.options.speed
      this.container.scrollTo(0, startY - deltaT * startY)

      if(this.getContainerScroll() > 0) requestAnimationFrame(loop)
    }

    loop()
  }

  getContainerScroll(){
    return this.container.scrollY ? this.container.scrollY : this.container.scrollTop
  }

}
