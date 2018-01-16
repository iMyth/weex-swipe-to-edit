<template>
  <div class="slide-to-edit">
    <div class="edit-layer">
      <div class="edit">
        <image class="edit-icon" :src="hideIcon" />
        <text @click="$emit('onedit', 'onedit')" class="edit-label">hide</text>
      </div>
      <div class="del">
        <image class="del-icon" :src="editIcon" />
        <text @click="$emit('ondelete', 'ondelete')" class="del-label">delete</text>
      </div>
    </div>
    <div class="label-layer"
      ref="labelLayer"
      @panstart="onTouchStart($event)"
      @panmove="onTouchMove($event)"
      @panend="onTouchEnd($event)"
    >
      <slot name="container"></slot>
    </div>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
// var modal = weex.requireModule('modal')
let currentX = 0
// let isHorizontal = false

export default {
  name: 'slide-to-edit',
  props: { },
  data () {
    return {
      startX: 0,
      maxX: 280,
      lastX: 0,
      editIcon: require('./assets/delete.png'),
      hideIcon: require('./assets/hide.png')
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
      this.lastX = 280
      animation.transition(this.$refs.labelLayer, {
        styles: {
          transform: 'translateX(-280px)'
        },
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1.2)',
        delay: 0,
        duration: 200
      }, () => { })
    },
    onTouchStart (e) {
      this.startX = e.changedTouches[0].pageX
    },
    onTouchMove (e) {
      // buggie, event conflicting on list
      let moveX = e.changedTouches[0].pageX - this.startX - this.lastX
      if (moveX > 0) {
        moveX = 0
      }
      if (moveX < -280) {
        moveX = -280
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
  background-color: #EDEDED;
}
.edit:active {
  background-color: #DDD7D7;
}
.del {
  background-color: #F64A4E;
}
.del:active {
  background-color: #DB4144;
}
.edit-label {
  color: #7D7D7D; font-size: 24px;
}
.del-label {
  color: white; font-size: 24px;
}
.edit, .del {
  width: 140px; text-align: center; height: 104px; align-items: center; justify-content: center;
}
.edit-icon, .del-icon {
  height: 52px; width: 52px;
}
.label-layer {
  background-color: #fff;
}
.slide-to-edit {
  height: 104px; overflow: hidden;
}
</style>
