import Timeline from './timeline/Timeline.vue'
import TimelineItem from './timeline/TimelineItem.vue'
import TimelineTitle from './timeline/TimelineTitle.vue'
import GdButton from './button/index.vue'
import type { App } from 'vue'

const plugin = {
  install(app: App) {
    app.component(Timeline.name, Timeline)
    app.component(TimelineTitle.name, TimelineTitle)
    app.component(TimelineItem.name, TimelineItem)
    app.component(GdButton.name, GdButton)
  }
}

export { Timeline, TimelineItem, TimelineTitle, plugin, GdButton }
