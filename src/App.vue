<template>
  <v-app id="inspire">
    <v-app-bar app flat>
      <v-container class="py-0 fill-height">

      </v-container>
    </v-app-bar>

    <v-main class="grey darken-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <router-link style="text-decoration: none; color: inherit;" to='characters'>
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title>
                        Characters
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
                <router-link style="text-decoration: none; color: inherit;" to='battle'>
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title>
                        Level Selection
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title>
                      Store
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="90vh" rounded="lg">
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>