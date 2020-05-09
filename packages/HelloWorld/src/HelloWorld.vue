<template>
  <p class="demo">This is VGC hello {{ world }} demo</p>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      world: "world",
    };
  },
};
</script>
