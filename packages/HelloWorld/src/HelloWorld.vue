<template>
  <div>
    <p class="demo-box">
      This is {{ t("vgc.helloworld.hello") }} {{ message }}
    </p>
  </div>
</template>

<script>
import Locale from "../../../src/utils/mixins/locale.js";
export default {
  name: "HelloWorld",
  mixins: [Locale],
  props: {
    message: {
      type: String,
      default: "world",
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-box {
  font-size: 24px;
  font-weight: bold;
}
</style>
