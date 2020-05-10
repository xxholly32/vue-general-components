<template>
  <div>
    <p>This is VGC hello {{ message }} demo</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "world",
    };
  },
};
</script>
