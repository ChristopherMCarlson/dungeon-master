import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: 0,
    stage: 0,
    enemies: {
      bicorns: [
        {
          name: 'Bicorn',
          image: require('@/assets/enemies/Bicorns/Bicorn.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Regal Bicorn',
          image: require('@/assets/enemies/Bicorns/RegalBicorn.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Mythic Bicorn',
          image: require('@/assets/enemies/Bicorns/MythicBicorn.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
      ],
      dragons: [
        {
          name: 'Dragon',
          image: require('@/assets/enemies/Dragons/Dragon.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Regal Dragon',
          image: require('@/assets/enemies/Dragons/RegalDragon.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Golden Dragon',
          image: require('@/assets/enemies/Dragons/GoldenDragon.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
      ],
      hydras: [
        {
          name: 'Hydra',
          image: require('@/assets/enemies/Hydras/Hydra.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Regal Hydra',
          image: require('@/assets/enemies/Hydras/RegalHydra.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Dark Hydra',
          image: require('@/assets/enemies/Hydras/DarkHydra.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Mythic Hydra',
          image: require('@/assets/enemies/Hydras/MythicHydra.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
      ],
      lions: [
        {
          name: 'Lion',
          image: require('@/assets/enemies/Lions/Lion.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Regal Lion',
          image: require('@/assets/enemies/Lions/RegalLion.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Dark Lion',
          image: require('@/assets/enemies/Lions/DarkLion.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
      ],
      nagas: [
        {
          name: 'Naga',
          image: require('@/assets/enemies/Naga/Naga.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Regal Naga',
          image: require('@/assets/enemies/Naga/RegalNaga.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Dark Naga',
          image: require('@/assets/enemies/Naga/DarkNaga.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Mythic Naga',
          image: require('@/assets/enemies/Naga/MythicNaga.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
      ],
      pikeheads: [
        {
          name: 'Pikehead',
          image: require('@/assets/enemies/Pikeheads/Pikehead.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Fire Pikehead',
          image: require('@/assets/enemies/Pikeheads/FirePikehead.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Dark Pikehead',
          image: require('@/assets/enemies/Pikeheads/DarkPikehead.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
        {
          name: 'Mythic Pikehead',
          image: require('@/assets/enemies/Pikeheads/MythicPikehead.png'),
          maxHealth: 50,
          currentHealth: 50,
          maxDamage: 15
        },
      ]
    },
    baseCharacters: {
      Knight: {
        name: 'Edmund',
        desc: 'High defense and high attack, the knight is reliable, but will rarely evade or critical.',
        cardImages: [
          require('@/assets/characters/Knight/Base/Cards/1.png'),
          require('@/assets/characters/Knight/Base/Cards/2.png'),
          require('@/assets/characters/Knight/Base/Cards/3.png'),
        ],
        spriteImages: [
          require('@/assets/characters/Knight/Base/Sprites/1.png'),
          require('@/assets/characters/Knight/Base/Sprites/2.png'),
          require('@/assets/characters/Knight/Base/Sprites/3.png'),
        ],
        expGroup: 'mediumSlow',
        baseHP: 0,
        baseAttack: 0,
        baseDef: 0,
        baseMagic: 0,
        baseEvasion: 0,
        baseLuck: 0
      },
      Assassin: {
        name: 'Erehone',
        desc: 'High luck and high evasion, the assassin is great for players looking to play with a bit of chance.',
        cardImages: [
          require('@/assets/characters/Assassin/Base/Cards/1.png'),
          require('@/assets/characters/Assassin/Base/Cards/2.png'),
          require('@/assets/characters/Assassin/Base/Cards/3.png'),
        ],
        spriteImages: [
          require('@/assets/characters/Assassin/Base/Sprites/1.png'),
          require('@/assets/characters/Assassin/Base/Sprites/2.png'),
          require('@/assets/characters/Assassin/Base/Sprites/3.png'),
        ],
        expGroup: 'mediumSlow',
        baseHP: 0,
        baseAttack: 0,
        baseDef: 0,
        baseMagic: 0,
        baseEvasion: 0,
        baseLuck: 0
      },
      Berserker: {
        name: 'Jeirn',
        desc: 'With extremely high attack, the berserker is a glass cannon. High damage is the name of the game with this character.',
        cardImages: [
          require('@/assets/characters/Berserker/Base/Cards/1.png'),
          require('@/assets/characters/Berserker/Base/Cards/2.png'),
          require('@/assets/characters/Berserker/Base/Cards/3.png'),
        ],
        spriteImages: [
          require('@/assets/characters/Berserker/Base/Sprites/1.png'),
          require('@/assets/characters/Berserker/Base/Sprites/2.png'),
          require('@/assets/characters/Berserker/Base/Sprites/3.png'),
        ],
        expGroup: 'mediumSlow',
        baseHP: 0,
        baseAttack: 0,
        baseDef: 0,
        baseMagic: 0,
        baseEvasion: 0,
        baseLuck: 0
      },
      Mage: {
        name: 'Irune',
        desc: 'High magic and decent luck, the mage can cast healing and damaging spells, making the battle highly controlled.',
        cardImages: [
          require('@/assets/characters/Mage/Base/Cards/1.png'),
          require('@/assets/characters/Mage/Base/Cards/2.png'),
          require('@/assets/characters/Mage/Base/Cards/3.png'),
        ],
        spriteImages: [
          require('@/assets/characters/Mage/Base/Sprites/1.png'),
          require('@/assets/characters/Mage/Base/Sprites/2.png'),
          require('@/assets/characters/Mage/Base/Sprites/3.png'),
        ],
        expGroup: 'mediumSlow',
        baseHP: 0,
        baseAttack: 0,
        baseDef: 0,
        baseMagic: 0,
        baseEvasion: 0,
        baseLuck: 0
      },
    },
    playerCharacters: []
  },
  mutations: {
    setNextLevel(state, newLevel) {
      state.level = newLevel;
    },
    setStartingCharacter(state, character) {
      state.playerCharacters.push(character);
    }
  },
  actions: {
    nextLevel({ commit }, newLevel) {
      console.log(newLevel)
      commit('setNextLevel', newLevel);
    },
    selectStartingCharacter({ commit, state }, character) {
      if (state.playerCharacters.length == 0) {
        commit('setStartingCharacter', character);
      }
      router.push('Characters')
    }
  },
  modules: {
  }
})
