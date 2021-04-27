<template>
  <v-app id="inspire">
    <v-app-bar app flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab href="#Map">
          Map
        </v-tab>
        <v-tab href="#Enemy">
          Enemy
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey darken-3">
      <v-tabs-items>
        <v-tab-item value='Map'>
          <Nothing></Nothing>
        </v-tab-item>
        <v-tab-item value='Enemy'>
          <EnemyTab></EnemyTab>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
  import EnemyTab from '@/components/Enemy.vue'
  import Nothing from '@/components/Nothing.vue'

  export default {
    data: () => ({
    }),
    components: {
      EnemyTab,
      Nothing
    },
  }
</script>

<style>
  .attack-img {
    padding: 0 !important;
  }
</style>