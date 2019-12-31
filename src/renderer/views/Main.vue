<template>
    <div class="page-warpper">

        <div class="header">
            <my-header></my-header>

            <div class="menuBar">

                <el-tabs type="border-card">

                    <el-tab-pane label="漫游">

                        <div class="svg-warpper">

                            <el-tag

                                    type="info"
                                    effect="dark">
                                场景
                            </el-tag>

                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-save"></use>
                            </svg>
                        </div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-earth"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-china"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-custom"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-revolve"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-center"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-camera"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-moren"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-revolve"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-firstperson"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-i"></use>
                        </svg>
                    </el-tab-pane>
                    <el-tab-pane label="视图">视图</el-tab-pane>
                    <el-tab-pane label="影像">影像</el-tab-pane>
                    <el-tab-pane label="瓦片">瓦片</el-tab-pane>
                    <el-tab-pane label="地形">地形</el-tab-pane>
                    <el-tab-pane label="分析">分析</el-tab-pane>
                    <el-tab-pane label="效果">效果</el-tab-pane>
                    <el-tab-pane label="标绘">标绘</el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <main>
            <div id="cesiumContainer"></div>
        </main>

    </div>

</template>

<script>
  import MyHeader from '../components/base/MyHeader'

  let Cesium = require('cesium/Cesium')
  require('cesium/Widgets/widgets')
  export default {
    name: 'Main',
    components: {MyHeader},
    mounted () {
      this.$nextTick(() => {
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MzJlOTlkMS00NDk1LTQ5OWQtOWNhMy01NjgyMDdlNmJjOWMiLCJpZCI6MTg0MzEsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzM3OTgwMDR9.kJuWRLeWtdVS_ESyxMLDXiMa6uaYQfPQ9-zxxbJJztE';
        const viewer = new Cesium.Viewer('cesiumContainer')
      })
    }
  }
</script>

<style>
    .menuBar .el-tabs--border-card {
        border: 0;
    }



    .menuBar > .el-tabs--border-card > .el-tabs__header {
        background-color: #474747;
        font-size: 20px;

    }

    .menuBar .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
        color: #ffffff;
        background-color: #6B6B6B;
    }

    .menuBar .el-tabs--border-card > .el-tabs__header .el-tabs__item {
        border: 0;
        font-weight: 400;
        color: #ffffff;
    }

    .menuBar .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {

        color: #ffffff;
        background-color: #6B6B6B;
    }

    .menuBar .el-tabs--border-card > .el-tabs__header {
        border-bottom: 0;
    }

    .menuBar .el-tabs--border-card > .el-tabs__content {
        background-color: #6B6B6B;

    }

    .svg-warpper .el-tag {
        line-height: 20px;
        padding: 0 10px;
        height: auto;
        margin-bottom: 15px;
    }

    .menuBar .el-tab-pane {
        display: flex;
        align-content: flex-start;
        justify-content: flex-start;
    }
</style>

<style scoped>
    .page-warpper {

         background: #060606;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    svg:hover {
        cursor: pointer;
    }

    svg {
        font-size: 30px;
    }
  main{
      height: 84vh;
  }
    #cesiumContainer {
        height: 100%;
    }

    main {

    }

    .svg-warpper {
        padding-right: 20px;
        border-right: 2px solid #474747;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        align-content: center;
        justify-content: center;
    }
</style>
