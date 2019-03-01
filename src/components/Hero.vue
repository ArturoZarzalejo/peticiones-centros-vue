<template>
	<div class="hero">
		<img :src="avatar" class="hero-avatar">
		<div class="hero-text">
			<p class="hero-text-name">{{name}}</p>
			<p>{{description}}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Hero extends Vue {
	@Prop() public avatar!: string;
	@Prop() public description!: string;
	@Prop() public name!: string;
}
</script>

<style scoped>
.hero {
	display: flex;
	margin: 20px;
	text-align: left;
}
.hero-avatar {
	object-fit: cover;
	border-radius: 50%;
	min-width: 120px;
	height: 120px;
}
.hero-text {
	margin-left: 5%;
}
.hero-text-name {
	font-weight: bold;
}
</style>
