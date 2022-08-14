<template>
  <Notification
    v-if="show"
    :type="notify.type" 
    :message="notify.message"
    @clear-notification="clear"
  />
</template>

<script setup>
import Notification from './components/notification.vue'
import { ref } from 'vue'

const show = ref(true)

const notify = ref({
  message: 'success',
  type: 'success'
})


function clear() {
  show.value = false
}
</script>