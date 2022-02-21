<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <suspense>
        <template #default>
          <transition name="fade-transform" mode="out-in">
            <!-- <keep-alive> -->
            <component :is="Component" :key="route.name" />
            <!-- </keep-alive> -->
          </transition>
        </template>
        <template #fallback>
          loading...
        </template>
      </suspense>
    </router-view>
  </section>
</template>
