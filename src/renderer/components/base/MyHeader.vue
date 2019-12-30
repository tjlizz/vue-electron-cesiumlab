<template>
    <header class="drag">
        <span class="no-drag">Cesium实验室</span>
        <div class="toolbar no-drag">
            <svg class="icon" aria-hidden="true" @click="changeWindow('setting')">
                <use xlink:href="#icon-setting"></use>
            </svg>

            <svg class="icon" aria-hidden="true" @click="changeWindow('min')">
                <use xlink:href="#icon-min"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="changeWindow('max')">
                <use xlink:href="#icon-max"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="changeWindow('close')">
                <use xlink:href="#icon-close"></use>
            </svg>
        </div>
    </header>
</template>

<script>
  export default {
    name: 'MyHeader',
    methods: {
      changeWindow: function (type) {
        console.log(type)
        this.$electron.ipcRenderer.send('aaa', type)
      }
    },
    mounted () {
    }

  }
</script>

<style scoped>


    header {
        padding: 6px;
        background: #000000;
        color: #45E2F0;
        font-weight: bold;
        font-size: 18px;
        background: url("../../assets/back.png");
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    svg:hover {
        cursor: pointer;
    }
</style>
