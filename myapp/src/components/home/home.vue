<template>
	<div class="home">
		home
	</div>
</template>

<script>
	import Vuex from "vuex";

	export default {
		components: {

		},
		created() {
			this.handleHomeData();
		},
		computed: {

		},
		watch: {
			state: {

			}
		},
		methods: {
			...Vuex.mapActions({
					handleHomeData: "home/handleHomeData"
				})
			},
		}
</script>


<style scoped>

</style>
