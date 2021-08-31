<template>
  <div class="container is-centered mt-6">
    <div class="tile is-ancestor">
      <div
        v-for="value in rows"
        :key="value"
        class="tile is-vertical is-parent"
      >
        <div class="tile is-child box">
          <p class="title">{{ getKeyAtIndex(value) }}</p>
        </div>
        <div class="tile is-child box">
          <p class="title">{{ getKeyAtIndex(value + 10) }}</p>
        </div>
        <div class="tile is-child box">
          <p class="title">{{ getKeyAtIndex(value + 20) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      rows: [0, 1, 2, 3, 4, -100, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    // eslint-disable-next-line consistent-return
    getKeyAtIndex(i) {
      const values = Object.values(this.keymap);
      for (let index = 0; index < values.length; index += 1) {
        const element = values[index];
        if (index === i) {
          return element;
        }
      }
      return null;
    },
  },
  computed: {
    ...mapState(['keymap']),
  },
};
</script>

<style lang="scss" scoped>
.keyboard {
  display: grid;
}
</style>
