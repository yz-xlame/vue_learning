Vue.component('bume',{
  template:'<div>'
  + '你叫啊，叫破喉咙也没有人管你,'
  + '小鱼人：'
  + '<slot></slot>'
  + '<br>'
  + '</div>'
});

Vue.component('dota',{
  props:['lane'],
  template:'<div>'
  + '分路：{{lane}}，'
  + '<slot name="hero">'
  + '您的英雄：'
  + '</slot>'
  + '<slot>'
  + '请选择英雄'
  + '</slot>'
  + '，做好准备，打死他们！'
  + '</div>'
})

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