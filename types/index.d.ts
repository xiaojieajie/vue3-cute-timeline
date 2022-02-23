import type { DefineComponent, Plugin } from 'vue'

type ITimeline = DefineComponent<{
  theme?: string
  background?: string
}>

type ITimelineBase = DefineComponent<{
  'bg-color'?: string
  'line-color'?: string
  'hollow'?: boolean
  'font-color'?: string
  'icon-size'?: string
}>

export declare const Timeline: ITimeline

export declare const TimelineItem: ITimelineBase

export declare const TimelineTitle: ITimelineBase

export declare const plugin: Plugin
