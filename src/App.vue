<template>
	<v-flex id="app">
		<router-view/>
	</v-flex>
	<!-- <div id="app"> -->
		<!-- <div id="nav">
			<router-link to="/">Home</router-link>|
			<router-link to="/about">About</router-link>|
			<router-link to="/storeExample">Store example</router-link>
		</div> -->
		
	<!-- </div> -->
</template>

<style>
@import url('./assets/styles/colors.css');
@import url('./assets/styles/variables.css');

#app {
	font-family: var(--ff-principal);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: var(--c-secondary);
}
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: var(--c-secondary);
}

#nav a.router-link-exact-active {
	color: var(--c-main);
}
</style>
