<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>
			For a guide and recipes on how to configure / customize this project,
			<br>check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
		</p>
		<h3>Navigation with parameters example</h3>
		<div class="example-navigation-content">
			<button class="my-button" @click="goToStoreExample()">Go to Store Example</button>
		</div>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
					target="_blank"
					rel="noopener"
				>babel</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
					target="_blank"
					rel="noopener"
				>typescript</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
					target="_blank"
					rel="noopener"
				>unit-jest</a>
			</li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li>
				<a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
			</li>
			<li>
				<a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
			</li>
			<li>
				<a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
			</li>
			<li>
				<a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
			</li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li>
				<a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
			</li>
			<li>
				<a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-devtools#vue-devtools"
					target="_blank"
					rel="noopener"
				>vue-devtools</a>
			</li>
			<li>
				<a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Views } from '@/router';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
	@Prop() public msg!: string;

	private goToStoreExample() {
		this.$router.push({ name: Views.STORE_EXAMPLE, params: { paramExample: 'example' } });
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: var(--c-main);
}

.example-navigation-content {
	margin-top: 10px;
}

.example-navigation-content .my-button {
	border-radius: 30px;
	border: 3px solid var(--c-secondary);
	background-color: var(--c-main);
	font-size: 1.0rem;
	padding: 10px;
	color: var(--c-secondary);
	font-weight: bold;
}

.example-navigation-content .my-button:hover {
	cursor: pointer;
	background-color: var(--c-secondary);
	color: var(--c-main-light);
}
</style>
