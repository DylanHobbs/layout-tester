<template>
  <div class="home">
    <b-button
      type="is-primary mb-4"
      size="is-medium"
      @click="isSettingsActive = true"
      >Show Settings</b-button
    >
    <TextBlock></TextBlock>
    <FollowKeyPressedOverlay v-if="showFollowOverlay"></FollowKeyPressedOverlay>
    <Keyboard v-if="showKeyboard"></Keyboard>
    <b-modal
      v-model="isSettingsActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <TextSettings @close="props.close"></TextSettings>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TextBlock from '../components/TextBlock.vue';
import TextSettings from '../components/TextSettings.vue';
import FollowKeyPressedOverlay from '../components/FollowKeyPressedOverlay.vue';
import Keyboard from '../components/Keyboard.vue';

export default {
  name: 'Home',
  data() {
    return {
      isSettingsActive: false,
    };
  },
  components: {
    TextBlock,
    TextSettings,
    Keyboard,
    FollowKeyPressedOverlay,
  },
  computed: {
    ...mapState({
      showFollowOverlay: (state) => state.settings.showFollowOverlay,
      showKeyboard: (state) => state.settings.showKeyboard,
    }),
  },
};
</script>
