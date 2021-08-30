<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TextBlock></TextBlock>
  </div>
</template>

<script>
import TextBlock from '../components/TextBlock.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    TextBlock,
    // HelloWorld,
  },
};
</script>
