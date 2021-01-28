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
      this.item = '';
    },
    remove : function(newIndex){
      console.log(newIndex);
      this.list.splice(newIndex, 1);
    },
  }
})
