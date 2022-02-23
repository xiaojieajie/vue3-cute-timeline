<script setup lang="ts" name="TimelineTitle">
import { useInit } from './hook'
import type { IBaseProps } from './hook'
const props = withDefaults(defineProps<IBaseProps>(), {
  hollow: false,
  fontColor: '#37414a'
})
const { slotClass, circleStyle, itemStyle, othersRef } = useInit(props)
</script>

<template>
  <li :style="itemStyle" class="timeline-title">
    <div ref="othersRef" :style="circleStyle" :class="slotClass" class="timeline-circle timeline-title-circle">
      <slot name="others" />
    </div>
    <slot />
  </li>
</template>
