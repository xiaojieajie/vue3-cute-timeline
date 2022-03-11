<script setup lang="ts" name="GdButton">

import { typeConfig } from './config'

const props = withDefaults(defineProps<{
  text?: string
  icon?: string
  color?: 'blue' | 'pink' | 'glass' | 'orange' | 'gray'
  fontSize?: string
  padding?: string
  type?: 'bracket' | 'arc' | 'flat'
  onlyIcon?: boolean
}>(), {
  text: '按钮',
  icon: '✰',
  color: 'blue',
  fontSize: '16px',
  padding: '.5em 1.2em .4em 1.2em',
  type: 'bracket',
  onlyIcon: false
})

const { textColor, backgroundColor, textBoxShadow, hoverBackgroundColor, activeBgImage, activeBoxShadow, activeTextShadow } = typeConfig[props.color || 'blue']
</script>

<template>
  <div class="gd-button" :class="[type, onlyIcon ? 'icon' : '' ]" :data-icon="icon">
    <span v-if="!onlyIcon">{{ text }}</span>
  </div>
</template>

<style>
.gd-button {
  color: v-bind(textColor);
  background-color: v-bind(backgroundColor);
  box-shadow: v-bind(textBoxShadow);
  border-top: 1px solid rgba(255,255,255,0.8);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: v-bind(padding);
  border-radius: 2px;
  text-shadow: rgb(255 255 255 / 50%) 0 1px 0;
  margin: 0.5em;
  position: relative;
  font-size: v-bind(fontSize);
  transition: background 0.2s, box-shadow 0.2s;
  background-image: -webkit-gradient(radial, 50% 0, 100, 50% 0, 0, from( rgba(255,255,255,0) ), to( rgba(255,255,255,0.7) ));
  display: inline-block;
}

.gd-button:hover {
  background-color: v-bind(hoverBackgroundColor);
}
.gd-button:active {
  background-image: v-bind(activeBgImage);
  box-shadow: v-bind(activeBoxShadow);
  transform: translateY(0.2em);
  text-shadow: v-bind(activeTextShadow);
}
.gd-button::before {
  font: 1.2em/0 sans-serif;
  content: attr(data-icon);
  margin-right: 6px;
}
.gd-button:focus {
  outline: none;
  color: rgba(254,255,255,0.9) !important;
  text-shadow: rgb(0 0 0 / 20%) 0 1px 2px;
}
.gd-button::after {
  content: "";
  left: 10%;
  border-radius: 7em 1em / 5em 1em;
  position: absolute;
  width: 90%;
  height: 60%;
  top: 0;
  background-image: -webkit-gradient(
    linear,
    0% 0,
    100% 0,
    from(rgba(255, 255, 255, 0.55)),
    to(rgba(255, 255, 255, 0.5)),
    color-stop(0.5, rgba(255, 255, 255, 0)),
    color-stop(0.8, rgba(255, 255, 255, 0))
  );
}

.bracket {
  border-radius: .5em / 1em;
}
.flat {
  border-radius: 8px;
}
.arc {
  border-radius: 5em 1em / 5em 1em;
  border-bottom: 0;
}
.gd-button.icon {
  border-radius: 1.6em 1.6em 1em 1em / 4em 4em 1em 1em;
  border-top-color: rgba(255,255,255,0.5);
}
.gd-button.icon::before {
  margin-right: 0;
}
</style>
