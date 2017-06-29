Vue.component('game-item',{
  props:['game','index'],
  template:`<li >{{index+1}}.{{game.title}}充值过{{game.money}}，总共游戏时间{{game.time}}h <button @click="$emit('remove')">X</button></li>`
})

var app=new Vue({
  el: '#app1',
  data:{
    name:'',
    money:0,
    time:0,
    games:[
      {title:'箱子英雄',money:320,time:150},
      {title:'WOW',money:3870,time:8350},
      {title:'sc2',money:450,time:150},
      {title:'dota2',money:80,time:2500},
    ]
  },
  methods:{
    add:function(){
      this.games.push({title:this.name,money:this.money,time:this.time});
      this.name='';
      this.money=0;
      this.time=0;
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