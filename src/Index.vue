<template>
  <div :style="{height: pageHeight + 'px'}" class="index-view">
    <div :style="{height: pageHeight + 'px'}" class="index-info">
      <slide-to-edit>
        <div
          slot="container" class="slot">
          <text class="exp">Hello</text>
          <text class="date">2007.9-2011.7</text>
        </div>
      </slide-to-edit>
    </div>
  </div>
</template>

<script>
  import SlideToEdit from './SlideToEdit.vue'

  const isWeb = () => {
    const { platform } = weex.config.env
    return typeof (window) === 'object' && platform.toLowerCase() === 'web'
  }

  const isIPhoneX = () => {
    const { deviceHeight } = weex.config.env
    if (isWeb()) {
      return typeof window !== 'undefined' && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375) && (parseInt(window.screen.height, 10) === 812)
    }
    return isIOS() && deviceHeight === 2436
  }

  export default {
    components: { SlideToEdit },
    computed: {
      pageHeight () {
        const { env } = weex.config
        const navHeight = isWeb() ? 0 : (isIPhoneX() ? 84 : 40)
        return env.deviceHeight / env.deviceWidth * 750 - navHeight
      }
    }
  }
</script>

<style scoped>
  .index-info {
    padding-top: 20px; background-color: #f4f4f4;
  }
  .edit-panel {
    height: 80px; align-items: center;
  }
  .slot {
    flex-direction: row; background-color: white;
    height: 104px; width: 750px; justify-content: space-between; align-items: center;
    padding-left: 20px; padding-right: 20px; border-radius: 12px;
  }
</style>

