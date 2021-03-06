Vue.component('child-component', {
  template: '<button v-on:click="clickBtn">emit event</button>',
  methods: {
    clickBtn: function() {
      // 할일 #1 - 상위 컴포넌트로 이벤트를 발생
      console.log('click Btn function');
      this.$emit('change:str', 123);
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    changeMessage: function(number) {
      console.log('changeMessage', number);
      this.message = 'event !';
    }
  }
});