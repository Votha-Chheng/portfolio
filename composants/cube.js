
new Vue({
  el:"#compoant-cube",
  data : {
    yAxisRotation : 0,
    xAxisRotation : 0 
  },
  methods : {
    toRight : function(){
      console.log("toRight")
      this.xAxisRotation -= 90
    },
    toLeft : function(){
      console.log("toLeft")
      this.xAxisRotation += 90
    },
    toUp : function(){
      console.log("top")
      this.yAxisRotation -= 90
    }
  },
  computed : {
    styleCube : function(){
      return{
        transform: `translate3d(0, 0, -450px) rotateY(${this.xAxisRotation}deg) rotateX(${this.yAxisRotation}deg)`
      } 
    }
  }
}) 