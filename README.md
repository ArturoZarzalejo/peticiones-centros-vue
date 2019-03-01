# Vue seed

## Project setup
```
npm install
```

## Project setup with a clean slate
```
npm ci
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and hot-reloads for preproduction
```
npm run serve-pre
```

### Compiles and hot-reloads for production
```
npm run serve-prod
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Run your tests
```
npm run test-coverage
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Official guide
See the [official guide](https://vuejs.org/v2/guide)

## Vue

Vue is a progressive framework for building user interfaces, it resembles other frameworks like Angular or React. 

It was born to be integrate in other projects or libraries (as components), but it has been enhanced to power up larger projects thanks to Vuex (a Flux-like implementation) or Vue Router.

## Vue instance

We could say Vue is a **component based** framework. An entire view or a little input are exactly the same: a Vue component. Inside they are pretty different: ony is a simple template with an ```<input>``` tag whereas the other one uses several components together and have functions to manage them.

However, in order to use components and render them we have to create a **Vue instance** which will allow us to use this components registering them and to use plugins to add complex and useful functionality to each component.

**Example: creating a simple Vue instance**
***main.ts***
```
import Vue from 'vue';
import App from './App.vue';

new Vue({
	render: (h) => h(App),
}).$mount('#app');
```

We create our new Vue instance with the entry point for our app (App.vue).

**Example: creating a complex Vue instance**
***main.ts***
```
import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store/store';

new Vue({
	i18n,
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');
```

In this case we are adding language translations (i18n), enrouting (router) and state management (store) which let us create bigger apps. They are plugins which add new functions or components to be used in Vue components.

## Vue Components

Vue components are the foundation of our apps. In our app, all visible elements will be components. They are created with SFCs: Single File Components. Basically, SFCs are template (HTML), styles (CSS) and logic (JS/TS) combined in one single file.

**Example**
***HelloWorld.js***
```
<template>
  <div class="hello-world">
    <h1>{{welcome}}</h1>
    <!-- HTML CODE -->
  </div>
</template>

<script lang="js"> //or ts!
  export default {
    data: function () {
      return {
        welcome: 'Hello World!'
      }
    }
  }
</script>

<style scope>
h1 {
  color: red;
}
</style>
```

Essentially, our component is an object which will be passed to Vue. It will create a component depending on the properties passed on this object. These properties can be the following:

- **name**: name of the component.
- **props**: parameters of the component. Can be declared with `{}` or `[]`.
    - `{}` declare the props with the type of the parameter.
    - `[]` declare the props without the type of the parameter.
- **components**: components that are locally used within component or Vue instance.
- **data**: properties used within the HTML of the component (in local componentes, **data** has to be a function returning an object)
- **computed**: public functions or variables. The result of this is cached and it don't change until any parameter's value change.
    - You can declare get and set functions for a variable.
- **methods**: public functions. It's called every time the view is rendered.
- **watch**: watcher of a variable. It's called when the variable's value changes
- **model**: This directive allows us to create a two-way binding.
    - prop: initial value.
    - event: name of the event that update the model.
- **provide**: declare functions that can be called inside its children component
- **inject**: inject functions that has been declared in the `provide` property of its parent component.
- **mixins**: array of mixin names to incorporate to the component or instance. They are small parts of components (methods, computed, data...) created to be reused in several components.
- **directives**: functions as directives for DOM manipulation.
- Functions of the **component lifecycle**
    - **created**: function called after create component.
    - **mounted**: function called before view is render.
    - **beforeDestroy**: function called before create component.

Fortunately, in recent Vue versions (3.x), they have implemented **Typescript** support. Now we have decorators to help beautify the component coding. They are in two packages:
- **vue-class-component**: Export the @Component decorator. This decorator let us initialize our component as a class instead of an object.
- **vue-property-decorator**: Export more decorators like @Prop or @Emit to help us coding our component logic.

***HelloWorld.ts***
```
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Component from 'vue-property-decorator'
import { ComponentA, ComponentB } from 'example-components'

//Functionality given by vue-class-component
@Component({
  components: {
    componentA,
    componentB,
  },
})
export default class App extends Vue {
  // initial data
  msg = 123
  count = 0
  child = 'mark'

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }

  //Functionality given by vue-property-decorator
  @Prop() public propMessage!: string; //props
  @Emit() //this.$emit
  addToCount(n: number) {
    this.count += n
  }
  @Inject('injected') myProperty!: string //inject
  @Provide('provided') mySecondProperty = 'value' //provide
  @Model('change', { type: Boolean }) checked!: boolean //model
  @Watch('child') //watch
  onChildChanged(val: string, oldVal: string) { }

}
</script>
```

Now, we see there are some parameters passed on the @Component decorator. That is because not all Vue component properties have decorators to help us. In that case, we have to pass them to the @Component as a parameter (it is the same as if we were creating our component in JS).

As side note, this is the difference between using decorators and not using them (using the previous example):

***Using decorators (22 lines)***
```
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Component from 'vue-property-decorator'

//Functionality given by vue-class-component
@Component
export default class App extends Vue {
  count = 0
  child = 'mark'

  @Prop() public propMessage!: string; //props
  @Emit() //this.$emit
  addToCount(n: number) {
    this.count += n
  }
  @Inject('injected') myProperty!: string //inject
  @Provide('provided') mySecondProperty = 'value' //provide
  @Model('change', { type: Boolean }) checked!: boolean //model
  @Watch('child') //watch
  onChildChanged(val: string, oldVal: string) { }
}
</script>
```

***Not using decorators (plain TS) (46 lines)***
```
<script>
export default {
  data() {
    return {
      count: 0,
      child: 'mark',
      mySecondProperty: 'value',
    }
  },
  props: {
    propMessage: {
      type: string,
    },
    checked: {
      type: Boolean
    }
  },
  inject: {
    myProperty: 'injected',
  },
  provide () {
    return {
      provided: this.mySecondProperty,
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  watch: {
    'child': [
      {
        handler: 'onChildChanged',
        immediate: false,
        deep: false
      }
    ],
  },
  methods: {
    onChildChanged(val, oldVal) { },
    addToCount(n) {
      this.count += n
      this.$emit('add-to-count', n)
    },
  }
}
</script>
```

Yes, decorators are pretty handy.

## Vue HTML Syntax

Now that we have an underlying logic for our template, we can wrap data and functions from our component in moustaches (```{{ }}```) in order to have a dynamic and reactive HTML template:

```
<span>{{ welcomeText }}</span>
<span>{{ subtitle.first }}</span>
<span>{{ askingName }}</span>
<span>{{ sumQuestion(1, 3) }}</span>
```
```
@Component
export default class App extends Vue {
  welcomeText = 'Welcome!'
  subtitle = {
    first: 'Is this your first app?'
  }

  get askingName() {
    return 'What is your name?'
  }

  sumQuestion(first, second) {
    return 'What is the sum of ' + first + ' and ' + second + ' ?'
  }
}
```

Also, Vue provides several directives to dynamically change our HTML template:

- **v-if** and **v-else**
Render a block. The block will only be rendered if the directive’s expression returns a truthy value. A ```v-else``` element must immediately follow a ```v-if```.
  ```
  <span v-if="isVueAwesome">Vue is awesome!</span>
  <span v-else>Oh no</span>
  ```
  See more: https://vuejs.org/v2/guide/conditional.html

- **v-show**
The usage is the same to ```v-if```. Difference is with v-show the HTML element remains in DOM, but is CSS ```visible``` property is set to hidden.
See more: https://vuejs.org/v2/guide/conditional.html

- **v-for**
Render a list of elements based on an array.

  ```
  <template>
    <ul>
      <li v-for="item in items">
        {{ item.name }}
      </li>
    </ul>
  </template>

  @Component
  export default class App extends Vue {
    items = [{ name: 'Alice'}, { name: 'Bob' }]
  }
  ```
  See more: https://vuejs.org/v2/guide/list.html

- **v-bind**
Data binding to HTML attributes (moustaches cannot be used in HTML attributes)

  ```
  <div v-bind:id="dynamicId"></div>
  <span v-bind:class="customClasses">Important info</span>
  <button v-bind:disabled="isButtonDisabled">My beautiful button</button>
  ```
  Due to data binding being a widely used feature, there is a ```v-bind``` shorthand to help have a more readable template. This shorthand is simply ```:```:

  ```
  <div :id="dynamicId"></div>
  <span :class="customClasses">Important info</span>
  <button :disabled="isButtonDisabled">My beautiful button</button>
  ```
  See more: https://vuejs.org/v2/guide/syntax.html#Attributes


- **v-on**
Listening to DOM events and run functions in response to this events:
  ```
  <button v-on:click="greet"> Say Hi! </button>

  @Component
  export default class App extends Vue {
    greet() {
      alert('Hello!')
    }
  }
  ```
  Similarly to data binding, listening to DOM events is a widely used feature, so a shorthand for ```v-on``` is available. This shorthand is ```@```:
  ```
  <button @click="greet"> Say Hi! </button>
  ```
  See more: https://vuejs.org/v2/guide/events.html


- v-model
This directive helps us create two-way data bindings on elements with user input values like ```<input>```, ```<textarea>``` and ```select```. 
  ```
  <input v-model="message" placeholder="edit me">
  <p>Message is: {{ message }}</p>
  ```
  See more: https://vuejs.org/v2/guide/forms.html


## Routing (Vue Router)

See more: https://router.vuejs.org/

Routing allows us to make applications with several views easier. With Vue we are already composing our application with components. When we add routing, we tell Vue when and where to render this components.

### Creating Router

A new Router will be created with a routes array. Each route accepts the following parameters:

- **path**: route URL.
- **component**: component to render in `<router-view>` when the current route matches the one defined in path.
- **components**: (can't be used with *component* parameter) components to render in `<router-view name="">` depending on the name chosen (can be rendered all of them).
- **children**: routes array for enrouting inside the component. Follows the same structure.
- **name**: route name.
- **redirect**: route URL to redirect to.
- **alias**: another route URL to be matched.
- **props**: if set to true, $route.params will be set as the component props.
- **meta**: object with additional info about the route

**Example**

```
const routes = [
  {
    path: '/list',
    components: {
      default: ListPeople,
      a: ListGoodPeople,
      b: ListBadPeople
    }
  },
  {
    path: '/detail,
    component: Detail
  },
  {
    path: '/person/:id,
    component: Person,
    props: true
  }
]

const router = new VueRouter({
  routes
})

```

### Using

In the end, vue-router is another plugin ready to be added to your Vue instance. vue-router adds some component options by global mixin.

```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const app = new Vue({
  router
}).$mount('#app')
```

Now we can use in our templates routing components for navigation:

- `<router-link></router-link>`: change the current route
- `<router-view></router-view`: component matched by the current route will render where this tag is located

**Example**
```
<router-link to="/list">Go to List component</router-link>
```

## State management (Vuex)

See more: https://vuex.vuejs.org/

Vuex serves as a **centralized store** for all the components in a Vue application. This concept was born when applications got bigger and we realized several components depended on the same data (state/source of truth). This components showed in their views the same piece of state or due to their actions needed to change it. This led to multiple workarounds like passing this state through props or send it via events, which are not optimal solutions.

### Using

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```

### Create Store

It seems a store is a simple object which is shared among several components, but it has two important differences:

- Vuex **stores are reactive**. If the store state's change, components will reactively update themselves.
- Changing the store implies commiting mutations (changes). This ensures **every state change leaves a track-able record**.

A new Store will be created with the following accepted parameters:

- **state**: object defined as the state to be shared among components
- **mutations**: functions which changes the state. They allow to record all changes commited to the state.
- **getters**: common functions to get pieces of state. They are like computed functions for store.
- **mutations**: common functions to change state. We could access state directly and change it too, but changes would not be trackable then. Mutations allow us to keep a *changes history*. They have to be synchronous.
- **actions**: common functions which perform mutations commits. They can be asynchronous.
- **modules**: help divide big stores into smaller modules (which are stores by themselves too)

**Example**
```
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [{ done: true }, { done: false}]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})

const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

```

## Testing (Vue Test Utils)

See more: https://vue-test-utils.vuejs.org/guides/getting-started.html

Testing Vue is done with Jest and own Vue tools (Vue Test Utils) which help us isolate components to test them.

### Components
Testing components is pretty straightforward: we isolate them and test methods, data or HTML. In order to achieve this, vue-test-utils offers us the functions ```mount``` and ```shallowMount``` to create components and mock dependencies or props of it.

- **```mount```**: Function to create an instance of the component (Wrapper). It let us pass arguments to mock data like props (propsData), router or translations (i18n).
- **```shallowMount```**: It is the same as ```mount``` but it does not create instances of child components.
- **```createLocalVue```**: Function to create a local instance of Vue. This instance is independent from the main Vue instance used in the App which, usually, has several plugins attached. This gives us a clean environment for our tests.
- **```wrapper```**: object received when using ```mount``` or ```shallowMount```. It exposes component's data, functions and helper functions to test the component.

On the other hand, Jest help us create batches of tests and execute them.
- **```describe```**: describe a batch of tests.
- **```it```**: single test.
- **```expect```**: assertion conditions for a test to succeed have been met.
- **```beforeEach```**: function to be executed before each test in a batch.
- **```jest.fn```**: function which returns a spy. We can use this spy both to mock data or functions and check when the function being spied has been called.

**Example**
```
import HelloWorld from '@/components/HelloWorld.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {

	let wrapper: any;

	beforeEach(() => {
		const localVue = createLocalVue();

		wrapper = shallowMount(HelloWorld, {
			localVue,
			propsData: { msg: '' },
		});
	});

	it('renders props.msg when passed', () => {
		expect(wrapper.props().msg).toBeDefined();
	});
```

### Other files
Normally, other files can be tested simply by importing them and calling their functions inside. However, testing asynchronous functions can be a bit tricky (for example, Vuex actions). For this situation, Jest provides a callback function which is passed to each ```it``` test as a parameter. When this function is called, the test is regarded as finished (and checks assertions are truthy).


## Vue Seed Architecture Additional information

### Environment variables

Environment variables are located in .env files (.env.development, .env.preproduction, .env.production). Vue loads one of them depending on the environment passed as parameter when executing ```vue-cli-service serve --env=environment```. Variable names MUST be start with 'VUE_APP'. They are loaded in ```process.env```.

See more: https://cli.vuejs.org/guide/mode-and-env.html

### Global styles

Sooner than later we are going to need global styles to be shared across components. In this situation, we can place the files declaring global CSS variables in ```src/assets/styles``` and importing them in our App entry point (```App.vue```).

```
:root {
    --c-main: white;
    --fs-main: 1em;
}
```
```
@import url('./assets/styles/variables.css');
```

Naming conventions:
- Colors start with ```--c```
- Font sizes start with ```--fs```.
- Font families start with ```--ff```.

### HTTP requests

The library chosen to make HTTP calls is ```Axios```. Its usage is fairly simple:

```
axios.get(endpoint, params)
axios.post(endpoint, body)
axios.resquest({
  url: endpoint,
  method: 'get'
})
```

See more: https://github.com/axios/axios

### Mocks

Mocks are useful when the services your App is consuming are not available. Those assets under the folder ```public``` can be accessed with Axios.

Mocks are located in ```public/mocks```.

***Example***
```
	axios.get('/mocks/heroes.json')
	axios.get('/mocks/example.json')
```

### Translations (vue-i18n)

In order to have our App translated to several languages, it is common practice to use internationalization plugins. In this case, we use ```vue-i18n```. As other plugins in many frameworks, internationalization is done thanks to translation files create by the developer. This files are objects with pairs key-value. The key is the same across the languages supported by the application while the value change depending on the language. In your app, you will use the key and ```vue-i18n``` will *translate* to the appropiate value.

Translations are located in ```src/assets/i18n```.

**Example**
***en.json***
```
{
  "EXAMPLE": "Hello World!",
}
```
***es.json***
```
{
  "EXAMPLE": "Hola Mundo!",
}
```

***App.vue***
```
<span>{{ $t('EXAMPLE') }}</span>
<span>{{ translatedVariable }} </span>

@Component
export default class App extends Vue {
  translatedVariable = this.$i18n.t('EXAMPLE')
}
```

See more: https://kazupon.github.io/vue-i18n/introduction.html

## Vue Additional information

### Comprehension pills

Little knowledge pills to help understand some Vue concepts:

- **Vuex**: "if you ever want to update provided data inside ancestors, then that’s a good sign that you probably need a real state management solution like Vuex instead".

- **Vuex**: [Related to the *$root* property all Vue instances created have which allows access to the uppermost parent component/instance] "This can be convenient for demos or very small apps with a handful of components. However, the pattern does not scale well to medium or large-scale applications, so we strongly recommend using Vuex to manage state in most cases."

- **Vue Philosophy - HTML, styles y logic in the same .vue file**: [Talking about X-Templates which are a type of HTML scripts that allow to declare HTML code and import it later into the *template* property when creating a Vue component] "These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition."

- **Vuex**: "So why don't we extract the shared state out of the components, and manage it in a global singleton? "


### Vue own properties

When components are created, own Vue properties are added (values or functions) into the Vue components/instances to add functionality. Examples:

- $emit
- $on
- $once
- $off

### Events

As in many frameworks, events can be emitted and listened on programmatically with the following functions:

- $emit(name_of_event, data): for emitting an event.
- $on(name_of_event, handler): for listening an event
- $once(name_of_event, handler): for listening an event just once
- $off(name_of_event, handler): for stop listening an event

See more: https://vuejs.org/v2/guide/components-edge-cases.html#Programmatic-Event-Listeners


### Transitions and animations

Vue offers several utilities to create custom transitions and animations and apply them to entire blocks.

**Example**

```
<template>
  <div>
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
  @Component
  export default class Demo extends Vue {
    show = true
  }
</script>

<style scope>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
<style>
```

See more: 
https://vuejs.org/v2/guide/transitions.html
https://vuejs.org/v2/guide/transitioning-state.html

### Mixins

Small chunks of components with no use by themselves (no view), but created to be reusable in several components. Components where we extend this mixins, they will inherit their functionality. ```mixins``` helper function is provided by vue-class-component too.

**Example**

***MyMixin.ts (mixin declaration)***
```
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyMixin extends Vue {
  mixinValue = 'Hello'
}
```

***App.ts (using mixins)***
```
import Component, { mixins } from 'vue-class-component'
import MyMixin from './mixin.js'

// Use `mixins` helper function instead of `Vue`.
// `mixins` can receive any number of arguments.
@Component
export class App extends mixins(MyMixin) {
  created () {
    console.log(this.mixinValue) // -> Hello
  }
}
```

See more: https://vuejs.org/v2/guide/mixins.html

### Custom directives

In addition to the default set of directives shipped in core, Vue also allows you to register your own custom directives. Sometimes it is needed to have some low-level DOM access on plain elements and custom directives offer that.

**Example**

```
<input v-focus>
```

```
@Component({
  directives: {
    focus: {
      inserted: (el) => {
        el.focus();
      }
    }
  }
})
```


See more: https://vuejs.org/v2/guide/custom-directive.html

### Render functions
Close-to-the-compiler functions. If you are interested in them and you are going to use them, you don't need this guide anymore. Start here: https://vuejs.org/v2/guide/render-function.html


### Plugins

Plugins usually add global-level functionality to Vue. Plugins can add diverse functionality as global mixins, instance functionality, directives, transitions....

**Example**

```
Vue.use(MyPlugin, { someOption A: true, someOptionB: true})
```
**Note**: It has to be called before starting the App instancing Vue

Vue.use() will call the method named *install* defined in the plugin:

```
MyPlugin.install = function (Vue, options) {
  Vue.myGlobalMethod = function () {...}

  Vue.directive('my-directive', {...})

  Vue.mixin({...})

  Vue.prototype.$myMethod = function (methodOptions) {...}
}
```

See more: https://vuejs.org/v2/guide/plugins.html

### Filters

Filters can be used to apply common text formatting. 

**Example**

```
{{ message | capitalize }}

<div v-bind:id="rawId | capitalize"></div>
```

***Defined locally***
```
@Component({
  filters: {
    capitalize: (value) => {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
```

See more: https://vuejs.org/v2/guide/filters.html

### Miscelanea

- **Object Spread Operator (...)**: This operator can be used to *merge* two objets. We can use it to merge, for example, the functions returned by *mapState* with the already computed function inside the component:

  **Example**
  ```
  computed: {
    localComputed () { /* ... */ },
    ...mapState({
      // ...
    })
  }
  ```

## Vue Router Additional information

### New Vue own properties added by vue-router

vue-router adds some new properties to every Vue component and instance:

- **$router**: router component to manipulate routing. We could get this object injecting it with `inject:['router']` too. It exposes useful data and functions:
  - **params**: path params when dynamic segments are present (p.e. /:id or /posts/:idPost)
- **$route**: current route.


### Dynamic Routes

Defined routes can have dynamic paths. This way you can use the same component for distinct paths.

**Example**
```
  routes: [
    { path: '/user/:id', component: User },
    { path: '/user/:id/post/:idPost', component: Post },
    { path: '*', component: Error404 }
  ]
```

Dynamics segments (parameters) are denoted by a colon `:` and they can be accessed in the component by the `$router.params` property.

See more: https://router.vuejs.org/guide/essentials/dynamic-matching.html

**Important note**: When navigating to the same route, the component instance is reused. This means the component lifecycle functions are not called. To react to params changes in the same component, you can watch the `$route` object or use the `beforeRouteUpdate` navigation guard.

## Nested routes

In many cases you will need to enroute some part of the view (and not the entire view). For this situation, nested routes exist. You can declare new routes in the `children` property for every *route* object and then call `<router-view></router-view>` inside the component with *subroutes*.

**Example**
```
<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>
```
```
routes: [
  { path: '/user/:id', component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]
```

See more: https://router.vuejs.org/guide/essentials/nested-routes.html

### Programmatic navigation

Aside from using `<router-link>`, Vue offers some methods inside the `$router` object for navigation:

- `$router.push(location)`: navigate to a different URL.
- `$router.replace(location)`: navigate to a different URL without pushing a new history entry. Instead, it replaces the current history entry.
- `$router.go(n)`: move user forwards or backwards through history stack by n steps.

See more: https://router.vuejs.org/guide/essentials/navigation.html

### Named views

Sometimes it is necessary to show more than one component in the same route. In this case, various components with different names can be defined and called in the `<router-view>`:

```
routes: [
  {
    path: '/',
    components: {
      default: Foo,
      a: Bar,
      b: Baz
    }
  }
]
```

```
<router-view></router-view>
<router-view name="a"></router-view>
<router-view name="b"></router-view>
```

See more: https://router.vuejs.org/guide/essentials/named-views.html

### Navigation guards
Esentially, they are hook/functions where navigation can be evaluated to continue, redirect it or cancel it.

***Global guards***
They have to be registered in the router created with `new VueRouter()`.

- **beforeEach(to, from, next)**: called before navigation. `Next` is a function which have to be called to let the navigation continue.
- **beforeResolve(to, from, next)**: called after navigation is confirmed.
- **afterEach(to, from)**: called after navigation. Naturally, they can't affect navigation.

***Per-route guards***
Defined in the route object:

- **beforeEnter(to, from, next)**: the same as `beforeEach` from global guards.

***In-Component guards***
Defined in the component object:

- **beforeRouteEnter(to, from, next)**: called before the route that renders this component is confirmed

- **beforeRouteEnter(to, from, next)**: called when the route that renders this component has changed, but this component is reused in the new route.

- **beforeRouteEnter(to, from, next)**: called when the route that renders this component is about to be navigated away from.

See more: https://router.vuejs.org/guide/advanced/navigation-guards.html


## Vuex Additional information

### New Vue own properties added by Vuex
Actually, Vuex only adds on single variable which is the Store being used:

- **$store**: This variable exposes the properties and functions that have been used to initialize the Store (state, getters...)

To access this.$store, the Store object has to be passed as parameter when creating the root Vue instance:

```
new Vue({
	render: (h) => h(App),
	store,
}).$mount('#app');
```

### Mutations
Mutations are the Vuex way to make changes to the state and track said changes. They are functions which have to be *commited*. Instead of being simply called, they are *commited* so Vuex can track the changes.

**Example**
```
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```

```
store.commit('increment', {
  amount: 10
})
```

Mutations must be **synchronous**. No service calls, timeouts or asynchronous functions must be called inside mutations. It is not forbidden, but it simply breaks the purpose of mutations.

### Actions
Actions are the solution to mutations need to be **synchronous**. Actions don't change state, they commit mutations and can have any amount of asynchronous operations. Similarly to mutations, actions have to be *dispatched*.

**Example**
```
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

```
store.dispatch('incrementAsync', {
  amount: 10
})
```

### Helper functions

Sometimes it can get quite verbose and convoluted to manage state data. For this reason, Vuex offers some helpers functions to reduce this problem:

- **mapState**: inside components, it helps create local state getters.

  ```
  @Component({
    computed:{
      ...mapState({
        count: state => state.count,

        countAlias: 'count',

        countPlusLocalState (state) {
          return state.count + this.localCount
        }
      }),
      ...mapState([
        'count',
        'todos'
      ])
    }
  })

  export default class App extends Vue {
    	public count!: number;
    	public countAlias!: number;
    	public countPlusLocalState!: number;
    	public todos!: number;
  }
  
  ```

- **mapGetters**: inside components, it helps map local variable to state getters.
  ```
  @Component({
    computed: {
      ...mapGetters([
        'doneTodosCount',
        'anotherGetter'
      ]),
      ...mapGetters({
        doneCount: 'doneTodosCount'
      })
    }
  })

  export default class App extends Vue {
    	public doneTodosCount!: number;
    	public anotherGetter!: any;
    	public doneCount!: number;
  }
  ```

- **mapMutations**: inside components, it helps map commits to mutations as local methods.
  ```
  @Component({
    methods: {
      ...mapMutations([
        'increment',
      ]),
      ...mapMutations({
        add: 'increment'
      })
    }
  })

  export default class App extends Vue {
    	public increment!: () => void;
    	public add!: () => void;
  }
  ```

- **mapActions**: inside components, it helps map dispatching actions as local methods:
  ```
  @Component({
    methods: {
      ...mapActions([
        'increment',
        'incrementBy'
      ]),
      ...mapActions({
        add: 'increment'
      })
    }
  })

  export default class App extends Vue {
    	public increment!: () => void;
    	public incrementBy!: (amount) => void;
    	public add!: () => void;
  }
  ```
