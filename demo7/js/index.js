var app=new Vue({
  el: '#app1',
  data: {
    num1:800,
    num2:100,
    num3:250,
    num4:3500,
  },
  computed:{
    sum1:function(){
      return this.num1+this.num2+this.num3;
    },
    sum2:function(){
      return (this.sum1/this.num4*100).toFixed(2);
    },
    sum3:function(){
      return this.num4-this.sum1;
    }
  }
})
// new Vue({
//   el:'',
//   data:{

//   },
//   computed:{

//   },
//   methed:{

//   },
//   watch:{

//   }
// })