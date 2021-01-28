var app = new Vue({
  el : '#root',
  data: {
    item : '',
    list: [],
    index: 0
  },
  methods: {
    add : function(){
      this.list.push(this.item);
      this.index += 1;
      console.log(this.list);
      
    },
    remove : function(newIndex){
      this.list.splice(newIndex);
      console.log(this.list);
    },
  }
})
