<template>
  <div>
    <h1>App 컴포넌트 로직</h1>
    <button @click="addNumber">add</button>
    <p>{{ num }}</p>
    <p>{{ doubleNum }}</p>
    <h1>Vuex 로직</h1>
    <button @click="addState">addState</button>
    <p>{{ this.$store.state.num }}</p>
    <p>{{ this.$store.getters.doubleNum }}</p>
  </div>
</template>

<script>
export default {
	data() {
		return {
			num: 0,
		};
	},
	computed: {
		doubleNum: function() {
			return this.num * 2;
		},
	},
	methods: {
		addNumber() {
			this.num += 1;
		},
		addState() {
			this.$store.commit('addNumber');
		},
	},
	created() {
		console.log(this);
	},
};
</script>

<style>
</style>