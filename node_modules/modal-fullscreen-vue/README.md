# modal-fullscreen-vue

## Project setup
```
npm install modal-fullscreen-vue
```

## How to import

Import globally in main.js:

```javascript
import ModalFullScreenVue from 'modal-fullscreen-vue'

Vue.use(ModalFullScreenVue)

// or custom use name
Vue.use('my-custom-name', ModalFullScreenVue)

```

Or import in component context:

```javascript
<script>
  import ModalFullScreenVue from 'modal-fullscreen-vue'

  export default {
    components: {
      'modal-fullscreen-vue': ModalFullScreenVue
    }
  }
</script>

```

## How to use

```javascript
<template>
  <div>
    <button @click="show = true">Show</button>
    <ModalFullScreen :show="show" v-on:show="handleShow">
      <template slot="header">
        header
      </template>

      <template slot="body">
        <div v-for="n in 1000" :key="n">
          Body {{ n }}
        </div>
      </template>

      <template slot="footer">
        <button @click="show = false">Close</button>
      </template>
    </ModalFullScreen>
  </div>
</template>

<script>
  import ModalFullScreen from '../App.vue'

  export default {
    components: {
      // without custom name
      ModalFullScreen
    },

    data () {
      return {
        bodyText: 'Lorem Ipsum',
        show: true
      }
    },

    methods: {
      handleShow (show) {
        alert(`show: ${show}`)
      }
    }
  }
</script>
```

## Props

| Name  | Type Value | Default value| Required |
| ------------- | ------------- | ------------- | ------------- |
| show  | Boolean  |  | true |
| scrollable  | Boolean  | true | false |

## Slots

| Name  | Description |
| ------------- | ------------- |
| header | Entire modal header content |
| body | Entire modal body content (scrollable true is default if the body content exceeds the available height) |
| footer | Entire modal footer content |

## Events

| Event  | Argument | Description
| ------------- | ------------- | ------------- |
| show  | show  | Boolean value. True if modal trigger show |