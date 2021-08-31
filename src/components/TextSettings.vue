<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Settings</p>
      <button type="button" class="delete" @click="$emit('close')" />
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column">
          <b-field label="Current Layout">
            <b-select
              placeholder="Large"
              size="is-large"
              expanded
              v-model="inputLayout"
            >
              <option
                v-for="layout in supportedLayouts"
                :key="layout.value"
                :value="layout.value"
              >
                {{ layout.name }}
              </option>
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
              <option
                v-for="layout in supportedLayouts"
                :key="layout.value"
                :value="layout.value"
              >
                {{ layout.name }}
              </option>
            </b-select>
          </b-field>
        </div>
      </div>
      <b-field label="Text Size (%)">
        <b-numberinput step="5" v-model="size"></b-numberinput>
      </b-field>
      <b-field>
        <b-switch v-model="showMoveable" size="is-large"
          >Show Moveable Key Pressed Overlay</b-switch
        >
      </b-field>
      <b-field>
        <b-switch v-model="showFollowing" size="is-large"
          >Show Following Key Pressed Overlay</b-switch
        >
      </b-field>
      <b-field>
        <b-switch v-model="showKeyboard" size="is-large"
          >Show Helper Keyboard</b-switch
        >
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button type="is-primary" label="Close" @click="$emit('close')" />
    </footer>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'TextSettings',
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    ...mapState(['supportedLayouts']),
    showKeyboard: {
      get() {
        return this.$store.state.settings.showKeyboard;
      },
      set(value) {
        this.$store.commit('setShowKeyboard', value);
      },
    },
    showFollowing: {
      get() {
        return this.$store.state.settings.showFollowOverlay;
      },
      set(value) {
        this.$store.commit('setFollowOverlay', value);
      },
    },
    showMoveable: {
      get() {
        return this.$store.state.settings.showMoveableOverlay;
      },
      set(value) {
        this.$store.commit('setMoveableOverlay', value);
      },
    },
    size: {
      get() {
        return this.$store.state.settings.size;
      },
      set(value) {
        this.$store.commit('setSize', value);
      },
    },
    outputLayout: {
      get() {
        return this.$store.state.settings.outputLayout;
      },
      set(value) {
        this.$store.commit('setOutput', value);
      },
    },
    inputLayout: {
      get() {
        return this.$store.state.settings.inputLayout;
      },
      set(value) {
        console.log(value);
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
