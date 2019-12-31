<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

  export default {
    name: 'vue-electron-cesiumlab',

  }
</script>

<style>
    * {
        padding: 0;
        border: 0;
        margin: 0;
    }

    .drag {
        -webkit-app-region: drag;
    }

    .no-drag {
        -webkit-app-region: no-drag;
    }

    body {
        overflow: hidden;
        background: #060606;
    }

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
