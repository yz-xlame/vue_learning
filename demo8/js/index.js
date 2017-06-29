var app=new Vue({
  el: '#app1',
  data: {
    num:0,
    message:''
  },
  watch:{
    num:function(){
      if(this.num<5){
        this.message="小吃怡情~";
      }
      else{
        this.message='多吃伤身!';
      }
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