<template>
  <div class="slide-to-edit">
    <div class="edit-layer">
      <text @click="$emit('onedit', 'onedit')" class="edit">Edit</text>
      <text @click="$emit('ondelete', 'ondelete')" class="del">Del</text>
    </div>
    <div class="label-layer"
      ref="labelLayer"
      @panstart="onTouchStart"
      @panmove="onTouchMove"
      @panend="onTouchEnd"
    >
      <slot name="container"></slot>
    </div>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
let currentX = 0
let isHorizontal = false

export default {
  name: 'slide-to-edit',
  data () {
    return {
      startX: 0,
      maxX: 200,
      lastX: 0
    }
  },
  methods: {
    handler (e) {
      console.log(e, e.changedTouches[0])
    },
    restore () {
      this.lastX = 0
      animation.transition(this.$refs.labelLayer, {
        styles: {
          transform: 'translateX(0px)'
        },
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1.2)',
        delay: 0,
        duration: 200
      }, () => { })
    },
    gotoEdit () {
      this.lastX = 200
      animation.transition(this.$refs.labelLayer, {
        styles: {
          transform: 'translateX(-200px)'
        },
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1.2)',
        delay: 0,
        duration: 200
      }, () => { })
    },
    onTouchStart (e) {
      // TODO: ...
      console.log('onTouchStart', e.changedTouches[0])
      this.startX = e.changedTouches[0].clientX
      isHorizontal = false
    },
    onTouchMove (e) {
      // TODO: ...
      console.log('onTouchMove', e.changedTouches[0])
      // buggie, event conflicting on list
      let moveX = e.changedTouches[0].clientX - this.startX - this.lastX
      if (moveX > 0) {
        moveX = 0
      }
      if (moveX < -200) {
        moveX = -200
      }
      currentX = moveX
      animation.transition(this.$refs.labelLayer, {
        styles: {
          transform: `translateX(${moveX}px)`
        },
        timingFunction: 'ease',
        delay: 0,
        duration: 0
      }, () => { })
    },
    onTouchEnd (e) {
      // TODO: ...
      console.log('onTouchEnd')
      if (Math.abs(currentX) > this.maxX / 2) {
        this.gotoEdit()
      } else {
        this.restore()
      }
    }
  }
}
</script>

<style scoped>
.edit-layer {
  position: absolute; display: flex;
  top: 0; right: 0; bottom: 0; left: 0;
  flex-direction: row; align-items: center;
  justify-content: flex-end;
}
.edit {
  background-color: yellow; color: black;
}
.del {
  background-color: red; color: white;
}
.edit, .del {
  width: 100px; text-align: center; height: 80px; align-items: center;
  line-height: 80px;
}
.label-layer {
  background-color: gray;
}
</style>

