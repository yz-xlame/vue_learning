Vue.component('bume',{
  template:'<div>'
  + '你叫啊，叫破喉咙也没有人管你,'
  + '小鱼人：'
  + '<slot></slot>'
  + '<br>'
  + '</div>'
});

var app=new Vue({
  el: '#app1',
  data: {
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