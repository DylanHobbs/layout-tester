<template>
  <section class="container">
    <MoveableKeyPressedOverlay v-if="showMoveable"></MoveableKeyPressedOverlay>
    <Loading v-if="loading"></Loading>
    <div
      v-else
      class="box code typing"
      v-bind:style="{ fontSize: size + '%' }"
      tabindex="0"
      v-on:keydown="keypress"
    >
      <div>
        <span
          v-for="(entry, key) in this.text"
          :class="current === key ? 'current' : entry.class"
          :ref="current === key ? 'current' : null"
          :key="key"
          v-html="entry.letter"
        ></span>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import MoveableKeyPressedOverlay from './MoveableKeyPressedOverlay.vue';
import Loading from './Loading.vue';

export default {
  name: 'TextBlock',
  components: {
    MoveableKeyPressedOverlay,
    Loading,
  },
  data() {
    return {
      text: [],
      current: 0,
      error: false,
      loading: true,
    };
  },
  mounted() {
    axios
      .get('https://baconipsum.com/api/?type=all-meat&paras=2')
      .then((res) => {
        this.createTextObject(res.data);
        this.loading = false;
      });
  },
  methods: {
    createTextObject(text) {
      let textArray = text.join('\n');
      textArray = textArray.split('');
      const finalFormat = [];
      textArray.forEach((element) => {
        finalFormat.push({
          letter: element,
          attempts: [],
          class: '',
        });
      });
      this.text = finalFormat;
    },
    keypress(e) {
      this.getPos();
      e.preventDefault();
      const keyPressed = this.checkMap(e.key);
      this.$store.commit('setLastKeyPressed', keyPressed);
      if (this.current >= 0) {
        if (e.keyCode !== 16) {
          this.checkKey(keyPressed);
          if (e.keyCode === 8) {
            if (this.current === 0) {
              this.text[this.current].class = ''; // Remove styling from entry on backspace
              this.current = 0;
            } else {
              this.text[this.current].class = ''; // Remove styling from entry on backspace
              this.current -= 1;
            }
          } else {
            this.current += 1;
          }
        }
      }
    },
    checkMap(letter) {
      const compare = letter.toUpperCase();
      if (compare in this.keymap) {
        if (letter === compare) {
          return this.keymap[compare];
        }
        return this.keymap[compare].toLowerCase();
      }
      return letter;
    },
    checkKey(letter) {
      if (this.text[this.current].letter === letter) {
        this.text[this.current].class = 'success';
      } else {
        this.text[this.current].attempts.push(letter); // Add it to the attempts
        this.text[this.current].class = 'error';
      }
    },
    getPos() {
      if (this.$refs.current) {
        this.pos = {
          left: this.$refs.current[0].getBoundingClientRect().left,
          top: this.$refs.current[0].getBoundingClientRect().top,
        };
      }
    },
  },
  computed: {
    ...mapState({
      keymap: (state) => state.keymap,
      size: (state) => state.settings.size,
      showMoveable: (state) => state.settings.showMoveableOverlay,
    }),
    pos: {
      get() {
        return this.$store.state.pos;
      },
      set(value) {
        this.$store.commit('setPosition', value);
      },
    },
  },
};
</script>
<style>
.typing {
  font-size: var(--size);
}
span {
  padding: 0px;
  margin: 0px;
}

.current {
  background: lightblue;
}
.error {
  background: lightcoral;
}
.success {
  background: lightgreen;
}
</style>
