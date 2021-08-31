<template>
    <section>
        <b-skeleton width="100%" height="400px" :animated="animated"></b-skeleton>
    </section>
</template>

<script>
export default {
  data() {
    return {
      animated: true,
    };
  },
};
</script>
