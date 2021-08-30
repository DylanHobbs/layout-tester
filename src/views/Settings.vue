<template>
  <section class="section">
      <b-field label="Text Size (%)">
            <b-numberinput step="5" v-model="size">
            </b-numberinput>
        </b-field>
  </section>
</template>
<script>
// import { mapState } from 'vuex';

export default {
  name: 'Settings',
  data() {
    return {

    };
  },
  mounted() {},
  methods: {},
  computed: {
    size: {
      get() {
        return this.$store.state.size;
      },
      set(value) {
        this.$store.commit('setSize', value);
      },
    },
  },
};
</script>
<style>
.typing {
  font-size: 140%;
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
