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

type IGdButton = DefineComponent<{
  'text'?: string
  icon?: string
  color: 'blue' | 'pink' | 'glass' | 'orange' | 'gray'
  'font-size'?: string
  padding?: string
  type?: 'bracket' | 'arc' | 'flat'
  'only-icon'?: boolean
}>

export declare const Timeline: ITimeline

export declare const TimelineItem: ITimelineBase

export declare const TimelineTitle: ITimelineBase

export declare const GdButton: IGdButton

export declare const plugin: Plugin
