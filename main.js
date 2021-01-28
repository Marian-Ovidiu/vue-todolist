var app = new Vue({
  el : '#root',
  data: {
    item : '',
    list: [],
    indexArray: [],
    index: 0
  },
  methods: {
    add : function(){
      this.list.push(this.item);
      this.index += 1;
      this.indexArray.push(this.index);
    },
    remove : function(newIndex){
      this.list.forEach((item, i) => {
        if(i === newindex){
          this.list.splice(i);
        }
      });

    },
  }
})
