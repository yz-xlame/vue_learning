var app=new Vue({
  el:'#app1',
  data: {
    day:0
  },
  computed:{
    hours:function(){
      return this.day*8;
    },
    money:function(){
      return this.hours*18;
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