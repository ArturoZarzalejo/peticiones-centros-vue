<template>
	<div class="hero-list-addmore">
			<div v-for="(heroName, heroNameIndex) in heroListNames"
				 :key=heroNameIndex
				 class="hero-list-addmore-hero">
				<span>{{heroName}}</span>
				<div @click="addHeroByName(heroName)" class="button-add">
					<button>+</button>
				</div>
			</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';


const componentAdditionalLogic = {
	computed: {
		...mapGetters({
			heroListNames: 'storeExample/getHeroListNames',
		}),
	},
	methods: {
		...mapActions({
			addHeroByName: 'storeExample/addHeroByName',
		}),
	},
};

@Component(componentAdditionalLogic)
export default class HeroListAddMore extends Vue {
	public heroListNames!: string[];
	public addHeroByName!: (heroName: string) => void;
}
</script>

<style scoped>

.hero-list-addmore {
	display: flex;
	justify-content: space-between;
}

.hero-list-addmore .hero-list-addmore-hero {
	flex-grow: 1 1 0.33;
	justify-content: space-between;
}

.hero-list-addmore .hero-list-addmore-hero span {
	font-size: 1.2rem;
	font-weight: bold;
}

.button-add button {
	width: 80px;
	height: 80px;
	border-radius: 40px;
	border: 4px solid var(--c-secondary);
	background-color: var(--c-main);
	font-size: 50px;
	color: var(--c-secondary);
	font-weight: bold;
}


.button-add button:hover {
	cursor: pointer;
	background-color: var(--c-secondary);
	color: var(--c-main-light);
}

.button-add button:focus {
	outline: 0;
}
</style>
