<template>
  <section class="container">
    <div
      class="box code typing"
      v-bind:style="{ fontSize: size + '%' }"
      tabindex="0"
      v-on:keydown="keypress"
    >
      <div>
        <span
          v-for="(entry, key) in this.text"
          :class="current === key ? 'current' : entry.class"
          :key="key"
          v-html="entry.letter"
        ></span>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'TextBlock',
  data() {
    return {
      text: [],
      current: 0,
      error: false,
    };
  },
  mounted() {
    this.$axios
      .get('https://baconipsum.com/api/?type=all-meat&paras=2')
      .then((res) => {
        this.createTextObject(res.data);
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
      e.preventDefault();
      console.log(this.current);
      if (this.current >= 0) {
        console.log(e);
        if (e.keyCode !== 16) {
          this.checkKey(e.key);
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
    checkKey(letter) {
      if (this.text[this.current].letter === letter) {
        this.text[this.current].class = 'success';
      } else {
        this.text[this.current].attempts.push(letter); // Add it to the attempts
        this.text[this.current].class = 'error';
      }
    },
  },
  computed: mapState(['size']),
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
