export default class BackToTop {
  constructor(trigger, options={}){
    this.trigger = trigger
    this.options = Object.assign({
      container: window,
      speed: 1000, // ms to top
      threshold: null // trigger element visibility will toggle at this container.scrollY position, up to 100vh if null
    }, options)

    this.container = this.options.container
    if(!this.options.threshold) this.options.threshold = window.innerHeight

    this.bind()
  }

  bind(){
    this.trigger.addEventListener('click', ()=>{ this.toTop() })
    this.container.addEventListener('scroll', ()=>{
      if(this.getContainerScroll() > this.options.threshold) this.trigger.classList.add('active')
      else this.trigger.classList.remove('active')
    })
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
