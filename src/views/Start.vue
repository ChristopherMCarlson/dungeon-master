<template>
  <v-main>
    <v-row class='justify-space-around'>
      <v-col class='text-center' cols='12'>
        <h1>Welcome to Dungeon Master</h1>
        <h1>Select Your Starting Character</h1>
      </v-col>
      <v-col class="text-center" cols='1'>
        <v-img :src='baseCharacters.Knight.spriteImages[0]' contain height='10vh'
          @mouseover="selectedCharacter = baseCharacters.Knight" @mouseleave="selectedCharacter = null"
          @click='selectCharacter(baseCharacters.Knight)'></v-img>
      </v-col>
      <v-col class="text-center" cols='1'>
        <v-img :src='baseCharacters.Berserker.spriteImages[0]' contain height='10vh'
          @mouseover="selectedCharacter = baseCharacters.Berserker" @mouseleave="selectedCharacter = null"
          @click='selectCharacter(baseCharacters.Berserker)'></v-img>
      </v-col>
      <v-col class="text-center" cols='1'>
        <v-img :src='baseCharacters.Assassin.spriteImages[0]' contain height='10vh'
          @mouseover="selectedCharacter = baseCharacters.Assassin" @mouseleave="selectedCharacter = null"
          @click='selectCharacter(baseCharacters.Assassin)'></v-img>
      </v-col>
      <v-col class="text-center" cols='1'>
        <v-img :src='baseCharacters.Mage.spriteImages[0]' contain height='10vh'
          @mouseover="selectedCharacter = baseCharacters.Mage" @mouseleave="selectedCharacter = null"
          @click='selectCharacter(baseCharacters.Mage)'></v-img>
      </v-col>
      <v-col class='text-center' cols='12' v-if='selectedCharacter'>
        <v-img :src='selectedCharacter.cardImages[0]' contain height='40vh'></v-img>
        <h4>{{selectedCharacter.desc}}</h4>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
  export default {
    data: () => ({
      selectedCharacter: null
    }),
    methods: {
      selectCharacter: function (character) {
        this.$store.dispatch('selectStartingCharacter', character);
      }
    },
    computed: {
      baseCharacters: function () {
        return this.$store.state.baseCharacters;
      }
    },
    beforeMount: function () {
      if (!this.$store.state.playerCharacters.length == 0) {
        this.$router.push('Characters')
      }
    }
  }
</script>