<template>
  <v-container>
    <v-overlay absolute :value="!player.currentHealth" color='black' opacity='1'>
      <h1>GAME OVER</h1>
      <v-btn color='red'>Play Again</v-btn>
    </v-overlay>
    <v-main class="grey darken-3">
      <v-row>
        <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="50vh">
            <v-row class='justify-center'>
              <v-col cols='12' class='text-center'>
                Player AP
              </v-col>
              <v-col cols='12' class="text-center">
                <v-progress-circular :size="100" :width="15" :value="(player.currentAP/player.maxAP)*100" color="teal">
                  {{ player.currentAP }}
                </v-progress-circular>
              </v-col>
              <v-col cols='12' class="text-center">
                Player Health
              </v-col>
              <v-col cols='12' class="text-center">
                <v-progress-circular :size="100" :width="15" :value="(player.currrentHealth/player.maxHealth)*100"
                  color="green">
                  {{ player.currentHealth }}
                </v-progress-circular>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="8">
          <v-sheet min-height="70vh" rounded="lg">
            <v-row class='justify-center'>
              <v-col cols='3' class='text-center mt-5'>
                <h3 class='mt-5'>{{enemy.name}}</h3>
                <v-img :src='enemy.image'>
                  <v-overlay absolute :value="!enemy.currentHealth" color="green">
                    <v-btn color="blue" @click="nextLevel">
                      Next Enemy
                    </v-btn>
                  </v-overlay>
                </v-img>
                <h3 class='mt-5'>Enemy Health</h3>
                <v-progress-linear :value="(enemy.currentHealth/enemy.maxHealth)*100" color="red" height="25"
                  class='mt-5'>
                  {{enemy.currentHealth}} / {{enemy.maxHealth}}
                </v-progress-linear>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols='12' class='text-center'>
                <p v-for="(action, index) in actionHistory.slice(0, 5)" :key='index'
                  :class="[action.includes('Enemy attacked for') ? 'enemy-text' : 'default-text']">{{ action }}</p>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="50vh" class='pa-2'>
            <v-row>
              <v-col cols='4' v-for='attack in attacks' :key="attack.name" @mouseover="activeAttack = attack"
                @mouseleave="activeAttack = null" @click='performAttack(attack)'>
                <v-img :style='{ "background-color": attack.color }' height='100%' width='100%' :src='attack.image'>
                </v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols='12' class='text-center' v-if='activeAttack'>
                <p class='mt-2'>AP Cost: {{activeAttack.APCost}}</p>
                <hr />
                <p class='mt-2'>Base Damage: {{activeAttack.baseDamage}}</p>
                <hr />
                <p :style='{ "color": activeAttack.color }' class='mt-2'>{{activeAttack.description}}</p>
                <hr />
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      actionHistory: [],
      activeAttack: null,
      player: {
        maxHealth: 100,
        currentHealth: 100,
        maxAP: 80,
        currentAP: 80
      },
      attacks: [
        {
          name: 'Fire Cast',
          APCost: 0,
          baseDamage: 10,
          description: 'A simple fire spell. A small fireball is launched.',
          image: require('@/assets/handAttacks/fire-spell-cast.png'),
          color: 'orange'
        },
        {
          name: 'Fire Punch',
          APCost: 20,
          baseDamage: 25,
          description: 'An enhanced fire spell. A fist of fire is launched.',
          image: require('@/assets/handAttacks/fire-punch.png'),
          color: 'orangered'
        },
        {
          name: 'Flaming Claw',
          APCost: 50,
          baseDamage: 80,
          description: 'The strongest fire spell. A flaming beast is conjured to attack the enemy.',
          image: require('@/assets/handAttacks/flaming-claw.png'),
          color: 'red'
        },
      ],
    }),
    methods: {
      performAttack: function (attack) {
        if (this.player.currentAP < attack.APCost) {
          this.actionHistory.unshift('Attempted to use ' + attack.name + '. Insufficiant AP.');
          return;
        } else {
          let enemyDamage = Math.floor(Math.random() * this.enemy.maxDamage) + 1;
          let critMissCalc = Math.floor(Math.random() * 10) + 1;
          this.player.currentAP -= attack.APCost;
          if (critMissCalc <= 2) {
            this.actionHistory.unshift('Attacked with ' + attack.name + '. Attack missed!');
          } else if (critMissCalc == 10) {
            this.actionHistory.unshift('Attacked with ' + attack.name + '. Critical hit for ' + (attack.baseDamage * 1.5) + ' damage!');
            this.enemy.currentHealth -= (attack.baseDamage * 1.5);
          } else {
            this.actionHistory.unshift('Attacked with ' + attack.name + ' for ' + attack.baseDamage + ' damage.');
            this.enemy.currentHealth -= attack.baseDamage;
          }
          if (this.enemy.currentHealth < 0) {
            this.enemy.currentHealth = 0;
            this.actionHistory.unshift('Enemy defeated!');
          } else {
            if (this.player.currentHealth - enemyDamage < 0) {
              enemyDamage = this.player.currentHealth;
            }
            this.player.currentHealth -= enemyDamage;
            this.actionHistory.unshift('Enemy attacked for ' + enemyDamage + ' damage.');
          }
        }
      },
      nextLevel: function () {
        this.$store.dispatch('nextLevel', (this.$store.state.level + 1));
      }
    },
    computed: {
      enemy: function () {
        return this.$store.state.enemies[this.$store.state.stage][this.$store.state.level];
      },
    }
  }
</script>

<style>
  .enemy-text {
    color: red
  }

  .default-text {
    color: white
  }
</style>