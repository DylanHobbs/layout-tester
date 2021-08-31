<template>
  <div class="container">
    <h1>Keymap</h1>
    <div class="columns">
      <div class="column">
        <b-field label="Current Layout">
          <b-select
            placeholder="Large"
            size="is-large"
            expanded
            v-model="inputLayout"
          >
            <option value="qwerty">Qwerty</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Output Layout">
          <b-select
            placeholder="Large"
            size="is-large"
            expanded
            v-model="outputLayout"
          >
            <option value="qwerty">Qwerty</option>
            <option value="dvorak">Dvorak</option>
          </b-select>
        </b-field>
      </div>
    </div>
  </div>
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
    map: {
      get() {
        return this.$store.state.size;
      },
      set(value) {
        this.$store.commit('setSize', value);
      },
    },
    outputLayout: {
      get() {
        return this.$store.state.outputLayout;
      },
      set(value) {
        this.$store.commit('setOutput', value);
      },
    },
    inputLayout: {
      get() {
        return this.$store.state.inputLayout;
      },
      set(value) {
        console.log(value);
      },
    },
  },
};
</script>
