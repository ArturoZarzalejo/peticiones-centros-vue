<template>
	<div>
		<div class="herolist">
			<div v-for="(hero, heroIndex) in heroList" :key=heroIndex>
				<Hero :avatar="hero.avatar" :description="hero.description" :name="hero.name"></Hero>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Hero from '@/components/Hero.vue';
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';


const componentAdditionalLogic = {
	components: {
		Hero,
	},
	computed: {
		...mapState('storeExample', [
			'heroList',
		]),
	},
};

@Component(componentAdditionalLogic)
export default class HeroList extends Vue {
	public heroList!: Hero[];
}
</script>

<style scoped>

.herolist {
	display: flex;
	flex-direction: column;
}

.herolist .herolist-heronames {
	flex-grow: 1 1 0;
	justify-content: space-between;
}
</style>
