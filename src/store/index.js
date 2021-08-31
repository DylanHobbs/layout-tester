import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    nextKey: null, // Next correct keypress
    settings: {
      showFollowOverlay: true, // Toggle for following carrot helper overlay
      showMoveableOverlay: false, // Toggle for moveable helper overlay
      size: 175, // Text size in percentage for text block
      font: 'default', // Font used in text block
      inputLayout: 'qwerty', // Input keyboard layout
      outputLayout: 'qwerty', // Output keyboard layout
      showKeyboard: true, // Toggle for helper keyboard graphic
    },
    supportedLayouts: [
      { name: 'Qwerty', value: 'qwerty' },
      { name: 'Dvorak', value: 'dvorak' },
      { name: 'Miryoku', value: 'miryoku' },
      { name: 'Colemak', value: 'colemak' },
      { name: 'Colemak DH-Mod', value: 'colemakDH' },
      { name: 'Norman', value: 'norman' },
      { name: 'Azerty', value: 'azerty' },
    ],
    pos: {
      left: 0,
      top: 0,
    },
    lastKeyPressed: null,
    keymap: {
      Q: 'Q',
      W: 'W',
      E: 'E',
      R: 'R',
      T: 'T',
      Y: 'Y',
      U: 'U',
      I: 'I',
      O: 'O',
      P: 'P',
      A: 'A',
      S: 'S',
      D: 'D',
      F: 'F',
      G: 'G',
      H: 'H',
      J: 'J',
      K: 'K',
      L: 'L',
      ';': ';',
      Z: 'Z',
      X: 'X',
      C: 'C',
      V: 'V',
      B: 'B',
      N: 'N',
      M: 'M',
      ',': ',',
      '.': '.',
      '/': '/',
      CONTROL: 'CONTROL',
      SHIFT: 'SHIFT',
    },
    dvorak: [
      '"',
      '<',
      '>',
      'P',
      'Y',
      'F',
      'G',
      'C',
      'R',
      'L',
      'A',
      'O',
      'E',
      'U',
      'I',
      'D',
      'H',
      'T',
      'N',
      'S',
      ':',
      'Q',
      'J',
      'K',
      'X',
      'B',
      'M',
      'W',
      'V',
      'Z',
      'CONTROL',
      'SHIFT',
    ],
    qwerty: [
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      ';',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      ',',
      '.',
      '/',
      'CONTROL',
      'SHIFT',
    ],
    miryoku: [
      'Q',
      'W',
      'F',
      'P',
      'B',
      'J',
      'L',
      'U',
      'Y',
      "'",
      'A',
      'R',
      'S',
      'T',
      'G',
      'M',
      'N',
      'E',
      'I',
      'O',
      'Z',
      'X',
      'C',
      'D',
      'V',
      'K',
      'H',
      ',',
      '.',
      '/',
      'CONTROL',
      'SHIFT',
    ],
    colemak: [
      'Q',
      'W',
      'F',
      'P',
      'G',
      'J',
      'L',
      'U',
      'Y',
      ';',
      'A',
      'R',
      'S',
      'T',
      'D',
      'H',
      'N',
      'E',
      'I',
      'O',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'K',
      'M',
      ',',
      '.',
      '/',
      'CONTROL',
      'SHIFT',
    ],
    colemakDH: [
      'Q',
      'W',
      'F',
      'P',
      'B',
      'J',
      'L',
      'U',
      'Y',
      ';',
      'A',
      'R',
      'S',
      'T',
      'G',
      'M',
      'N',
      'E',
      'I',
      'O',
      'Z',
      'X',
      'C',
      'D',
      'V',
      'K',
      'H',
      ',',
      '.',
      '/',
      'CONTROL',
      'SHIFT',
    ],
    norman: [
      'Q',
      'W',
      'D',
      'F',
      'K',
      'J',
      'U',
      'R',
      'L',
      'A',
      'S',
      'E',
      'T',
      'G',
      'Y',
      'N',
      'I',
      'O',
      'H',
      ';',
      'Z',
      'Z',
      'C',
      'V',
      'B',
      'P',
      'M',
      ',',
      '.',
      '/',
      'CONTROL',
      'SHIFT',
    ],
    azerty: [
      'A',
      'Z',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      'Q',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'M',
      'W',
      'X',
      'C',
      'V',
      'B',
      'M',
      ',',
      '.',
      '/',
      '!',
      'CONTROL',
      'SHIFT',
    ],
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    setNextKey(state, key) {
      state.nextKey = key;
    },
    setSize(state, size) {
      state.settings.size = size;
    },
    setShowKeyboard(state, value) {
      state.settings.showKeyboard = value;
    },
    setLastKeyPressed(state, key) {
      state.lastKeyPressed = key;
    },
    setPosition(state, position) {
      state.pos = position;
    },
    setFollowOverlay(state, value) {
      state.settings.showFollowOverlay = value;
    },
    setMoveableOverlay(state, value) {
      state.settings.showMoveableOverlay = value;
    },
    setOutput(state, outputLayout) {
      if (outputLayout in state) {
        state.settings.outputLayout = outputLayout;
        const outputMap = state[outputLayout];
        const keys = Object.keys(state.keymap);
        keys.forEach((key, index) => {
          state.keymap[key] = outputMap[index];
        });
      }
    },
    setInput(state, inputLayout) {
      if (inputLayout in state) {
        state.settings.inputLayout = inputLayout;
        const inputMap = state[inputLayout];
        const newKeymap = {};
        const values = Object.values(state.keymap);
        values.forEach((value, index) => {
          newKeymap[inputMap[index]] = value;
        });
        state.keymap = newKeymap;
      }
    },
  },
  actions: {},
  modules: {},
});
