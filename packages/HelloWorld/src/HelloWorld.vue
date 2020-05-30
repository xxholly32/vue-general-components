<template>
  <div>
    <p class="demo-box">This is VGC {{ t('hgc.helloworld.hello') }} {{ message }} demo</p>
  </div>
</template>

<script>
import Locale from '../../../src/utils/mixins/locale.js';
export default {
  name: "HelloWorld",
  mixins: [Locale],
  data() {
    return {
      message: "world",
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-box {
  font-size: 24px;
  font-weight: bold;
}
</style>
