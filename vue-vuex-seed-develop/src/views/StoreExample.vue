<template>
	<div class="store-example">
		<h1>{{$t('STOREEXAMPLE_TITLE')}}</h1>
		<p>Mocks used?: {{ isMocksUsed }}</p>
		<p>Route param?: {{getRouteParamUsed}}</p>

		<HeroListAddMore/>
		<HeroList/>
		<button class="button-add-hero" @click="addHero">Add new hero</button>
	</div>
</template>

<script lang="ts">
import HeroList from '@/components/HeroList.vue';
import HeroListAddMore from '@/components/HeroListAddMore.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';

@Component({
	components: {
		HeroList,
		HeroListAddMore,
	},
	computed: {
		...mapState({
			isMocksUsed: 'isMocksActivated',
		}),
	},
	methods: {
		...mapActions('storeExample', [
			'initHeroList',
			'addHero',
		]),
	},
})
export default class StoreExample extends Vue {
	@Prop() public paramExample!: string;

	public initHeroList!: () => void;
	public addHero!: () => void;
	public isMocksUsed!: boolean;

	private created() {
		console.log('Param: ', this.$route.params, this.paramExample);
		this.initHeroList();
	}

	get getRouteParamUsed() {
		return this.paramExample ? this.paramExample : this.$i18n.t('STOREEXAMPLE_PARAM_EMPTY');
	}
}
</script>

<style scoped>
.store-example {
	margin: 0 25%;
}

.store-example .button-add-hero {
	border-radius: 30px;
	border: 3px solid var(--c-secondary);
	background-color: var(--c-main);
	font-size: 1.0rem;
	padding: 10px;
	color: var(--c-secondary);
	font-weight: bold;
}

.store-example .button-add-hero:hover {
	cursor: pointer;
	background-color: var(--c-secondary);
	color: var(--c-main-light);
}

.store-example .button-add-hero:focus {
	outline: 0;
}
</style>