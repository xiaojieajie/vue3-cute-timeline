import Timeline from './timeline/Timeline.vue'
import TimelineItem from './timeline/TimelineItem.vue'
import TimelineTitle from './timeline/TimelineTitle.vue'
import type { App } from 'vue'

const plugin = {
  install(app: App) {
    app.component(Timeline.name, Timeline)
    app.component(TimelineTitle.name, TimelineTitle)
    app.component(TimelineItem.name, TimelineItem)
  }
}

export { Timeline, TimelineItem, TimelineTitle, plugin }
