<template>
  <div id="app" class="mdv-modal-fullscreen" :class="{ 'mdv-show': this.show }">
    <div class="mdv-modal-content">
      <div class="mdv-modal-header">
        <slot name="header"></slot>
      </div>
      <div class="mdv-modal-body" :class="{ 'mdv-modal-scrollable': scrollable }">
        <slot name="body"></slot>
      </div>
      <div class="mdv-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-fullscreen-vue',

  props: {
    show: { type: Boolean, required: true },
    scrollable: { type: Boolean, default: true }
  },

  watch: {
    show (show) {
      this.$emit('show', show)
    }
  }
}
</script>

<style scoped>
  .mdv-modal-fullscreen {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  }

  .mdv-modal-fullscreen .mdv-modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
  }

  .mdv-modal-fullscreen .mdv-modal-header {
    padding: 21.2px 0px;
  }

  .mdv-modal-fullscreen .mdv-modal-body {
    height: calc(100vh - 130px);
    max-height: inherit;
  }

  .mdv-modal-fullscreen .mdv-modal-body {
    height: calc(100vh - 130px);
    max-height: inherit;
  }

  .mdv-show {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
    z-index: 99999;
  }

  .mdv-modal-scrollable {
    overflow-y: auto;
  }
</style>
