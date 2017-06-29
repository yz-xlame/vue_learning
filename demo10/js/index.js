var app=new Vue({
  el: '#app1',
  data: {
    // 对象形式
    isac:false,
    Round:{
      shallow:false,
      circle:false,
    },
    // 数组形式
    arr1:'deep',
    arr2:'small',

    // 内联
    w:50,
    h:40,
    // 内联对象
    object:{
      'margin-top':'20px',
      'margin-bottom':'20xp',
      backgroundColor:'#666',
      border:'5px solid #f00',
    },
  },
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