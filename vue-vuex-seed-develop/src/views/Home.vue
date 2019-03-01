<template>
	<div class="home">
		<!-- <p>App version: {{appVersion}}</p> -->
		<InformacionGeneral></InformacionGeneral>
		<Perfiles></Perfiles>
	</div>
</template>

<script lang="ts">
import InformacionGeneral from '@/components/InformacionGeneral.vue';
import Perfiles from '@/components/Perfiles.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
	components: {
		InformacionGeneral,
		Perfiles
	},
})
export default class Home extends Vue {
	private appVersion: any;

	private created() {
		this.appVersion = process.env.VUE_APP_VERSION;
	}
}
</script>
