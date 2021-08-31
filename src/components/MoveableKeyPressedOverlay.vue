<template>
    <div id="overlay">
        <h1>{{ lastKeyPressed }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      elmnt: null,
    };
  },
  computed: mapState(['lastKeyPressed']),
  methods: {
    dragMouseDown(event) {
      let e = event;
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = this.elementDrag;
    },
    elementDrag(event) {
      let e = event;
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      this.pos1 = this.pos3 - e.clientX;
      this.pos2 = this.pos4 - e.clientY;
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      // set the element's new position:
      this.elmnt.style.top = `${this.elmnt.offsetTop - this.pos2}px`;
      this.elmnt.style.left = `${this.elmnt.offsetLeft - this.pos1}px`;
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
  },
  mounted() {
    this.elmnt = this.$el;
    this.elmnt.onmousedown = this.dragMouseDown;
  },
};
</script>

<style lang="scss" scoped>
#overlay {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    justify-content: center;
}

#overlay > h1 {
    opacity: 0.8;
    color: white;
    background-color: lightgray;
    border-radius: 1rem;
    padding: 30px;
    font-size: 2rem
}
</style>
