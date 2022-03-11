<script setup lang="ts" name="TimelineItem">
import { useInit } from './hook'
interface IBaseProps {
  bgColor?: string
  lineColor?: string
  hollow?: boolean
  iconSize?: string
  fontColor?: string
}
const props = withDefaults(defineProps<IBaseProps>(), {
  hollow: false,
  fontColor: '#37414a'
})
const { slotClass, circleStyle, itemStyle, othersRef } = useInit(props)
</script>

<template>
  <li :style="itemStyle" class="timeline-item">
    <div ref="othersRef" :style="circleStyle" :class="slotClass" class="timeline-circle">
      <slot name="others" />
    </div>
    <slot />
  </li>
</template>
