var app=new Vue({
  el: '#app1',
  data: {
    result:0,
  },
  methods:{
    btn:function(){
      return this.result=Math.floor(Math.random()*10000*100)/100;
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