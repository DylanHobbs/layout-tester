<template>
    <div id="overlay" :style="{top: posTop + 'px', left: posLeft + 'px'}">
        <h1>{{ displayKey }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      oldKey: null,
    };
  },
  computed: {
    ...mapState(['lastKeyPressed', 'pos']),
    posTop() {
      return this.pos.top - 70;
    },
    posLeft() {
      return this.pos.left;
    },
    displayKey() {
      if (this.lastKeyPressed === 'Backspace') {
        return this.oldKey;
      } if (this.lastKeyPressed === ' ') {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.oldKey = this.lastKeyPressed;
        return '_';
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.oldKey = this.lastKeyPressed;
      return this.lastKeyPressed;
    },
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>
#overlay {
    display: flex;
    left: 0px;
    top: 0px;
    position: absolute;
}

#overlay > h1 {
    opacity: 0.8;
    color: white;
    background-color: lightgray;
    border-radius: 1rem;
    padding: 10px;
    font-size: 2rem
}
</style>
