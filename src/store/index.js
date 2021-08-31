import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    size: 175,
    inputLayout: 'qwerty',
    outputLayout: 'qwerty',
    settings: {
      showFollowOverlay: true,
      showMoveableOverlay: false,
      size: 175,
      font: 'default',
      inputLayout: 'qwerty',
      outputLayout: 'qwerty',
    },
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
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    setSize(state, size) {
      state.settings.size = size;
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
        state.outputLayout = outputLayout;
        const outputMap = state[outputLayout];
        const keys = Object.keys(state.keymap);
        keys.forEach((key, index) => {
          state.keymap[key] = outputMap[index];
        });
      }
    },
    setInput(state, inputLayout) {
      if (inputLayout in state) {
        state.inputLayout = inputLayout;
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
