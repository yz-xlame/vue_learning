//注册组件
var apiURL='https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='
var active='null'

Vue.component('radio-group',{
    props:['value','id'],
    template:'<div>'
            + '<input type="radio" :value="value" :id="id" name="radio" v-on:click="inc">'
            + '<label :for="id">{{value}}</label>'
            + '</div>',
    methods:{
        inc:function(){
            active=this.value
            this.$emit('inc')
        }
    }
})

Vue.component('li-group',{
    props:['record'],
    template:'<li>'
        + '<a :href="record.html_url" target="_blank" class="commit">{{ record.sha }}</a>'
        + '- <span class="message">{{ record.commit.message | truncate }}</span><br>'
        + 'by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span>'
        + 'at <span class="date">{{ record.commit.author.date | formatDate }}</span>'
        + '</li>',
  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
})

//创建实例
var app=new Vue({
  el: '#app1',
  data:{
    active:null,
    commits:null,
    radios:[
        {
            value:'master',
            id:'master'
        },
        {
            value:'dev',
            id:'dev'
        }
    ],
  },
  watch: {
    active: 'fetchData'
  },
  methods:{
    incT:function(){
        this.active=active
    },
    fetchData:function(){
        var xhr=new XMLHttpRequest()
        var self=this
        xhr.open('GET',apiURL+self.active)
        xhr.onload=function(){
            self.commits=JSON.parse(xhr.responseText)
            console.log(self.commits[0].html_url)
        }
        xhr.send()
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