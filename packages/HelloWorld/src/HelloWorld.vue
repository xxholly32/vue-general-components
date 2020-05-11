<template>
  <div>
    <p class="demo-box">This is VGC hello {{ message }} demo</p>
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

<style>
/* css */
.demo-box {
  font-size: 24px;
  font-weight: bold;
}
</style>
