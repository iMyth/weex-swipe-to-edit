<template>
  <div class="index-view">
    <div class="index-info">
      <slide-to-edit @onedit="handler" @ondelete="handler">
        <div class="edit-panel" slot="container">
          <text>slide to edit tag</text>
        </div>
      </slide-to-edit>
    </div>
  </div>
</template>

<script>
  import SlideToEdit from './SlideToEdit.vue'

  export default {
    components: { SlideToEdit },
    computed: { },

    created () { },

    methods: {
      handler (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  .index-info {
    padding-top: 0;
  }
  .edit-panel {
    height: 80px; align-items: center;
  }
</style>

