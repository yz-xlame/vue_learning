Vue.component('game-item',{
  props:['game','index'],
  template:'<li>（{{index+1}}） {{game.title}}</li>'
});

var app=new Vue({
  el:'#app1',
  data: {
    games:[
      {title:'风暴开箱',price:'500'},
      {title:'奔波霸儿',price:'400'},
      {title:'卡尔萨斯',price:'300'}
    ]
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