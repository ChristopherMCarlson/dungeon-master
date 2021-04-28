<template>
  <v-main>
    <v-row class='justify-center'>
      <v-col class="text-center" cols='1' v-for='character in characters' :key='character.name'>
        <v-img :src='character.spriteImages[0]'></v-img>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
  export default {
    data: () => ({

    }),
    computed: {
      characters: function () {
        return this.$store.state.playerCharacters;
      }
    },
  }
</script>