<template>
  <div class="demo">
    <div class="demo-them light">
      <timeline theme="lightblue">
        <timeline-title>2022</timeline-title>
        <timeline-item bg-color="#9dd8e0" font-color="#e166ab">
          祝大家虎年大吉
        </timeline-item>
        <timeline-item :hollow="true" bg-color="#e6b6b0">
          虎虎生威 🎉
        </timeline-item>
        <timeline-item bg-color="#b0e6d1">
          哈哈哈
        </timeline-item>
        <timeline-title bg-color="#f2d7e1">
          用例
        </timeline-title>
        <timeline-item bg-color="#b0e6d1" icon-size="small">
          icon small size
        </timeline-item>
        <timeline-item bg-color="#b0e6d1" icon-size="medium">
          icon medium size
        </timeline-item>
        <timeline-item bg-color="#b0e6d1" icon-size="large">
          icon large size
        </timeline-item>
        <timeline-item>
          <template #others>
            <img
              src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png"
              class="icon-heart"
              style="width: 20px;"
            >
          </template>
          <p>自定义图片</p>
          <p class="append">
            666666666666666666666
          </p>
        </timeline-item>
        <timeline-item line-color="#a6ade4">
          <p>
            欢迎来看看
            <a href="https://llongjie.top">我的博客</a>
          </p>
          <p class="append">
            6666666666666666666666666666
          </p>
        </timeline-item>
      </timeline>
    </div>
    <div class="demo-theme dark">
      <div class="demo-theme dark">
        <timeline theme="lightblue">
          <timeline-title>2022</timeline-title>
          <TimelineItem bg-color="#9dd8e0" font-color="#e166ab">
            祝大家虎年大吉
          </TimelineItem>
          <timeline-item :hollow="true" bg-color="#e6b6b0">
            虎虎生威 🎉
          </timeline-item>
        </timeline>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { Timeline, TimelineItem, TimelineTitle } from '../packages/index'
</script>

<style>
.append {
    font-size: .8em;
    margin-top: 3px;
    color: #646C7C;
  }

  a {
    color: #bf6dcf;
    font-weight: bold;
    text-decoration: none;
  }

  .icon-heart {
    width: 20px;
  }

  .demo {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 1rem;
  }

  .demo-theme.dark {
    background: #3a3939;
  }

  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>
