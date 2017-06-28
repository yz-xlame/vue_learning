new Vue({
  el: '#app1',
  data: {
    message:'hello',
    num:0.3
  },
  filters:{
    toupper:function(value){
      return value.toUpperCase();
    },
    to:function(value){
      return value*100+'%';
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